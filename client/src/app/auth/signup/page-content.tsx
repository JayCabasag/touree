"use client";

import { FormActionButton } from "@/components/form/form-action-button";
import FormTextInput from "@/components/form/form-text-input";
import { AuthPageLayout } from "@/components/layout/AuthPageLayout";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  useAuthLoginService,
  useAuthSignUpService,
} from "@/services/api/services/auth";
import HTTP_CODES_ENUM from "@/services/api/types/http-codes";
import useAuthActions from "@/services/auth/use-auth-actions";
import useAuthTokens from "@/services/auth/use-auth-tokens";
import withPageRequiredGuest from "@/services/auth/with-page-requred-guests";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { FormProvider, useForm, useFormState } from "react-hook-form";
import * as yup from "yup";

type TPolicy = {
  id: string;
  name: string;
};

type SignUpFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const useValidationSchema = () => {
  return yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords do not match")
      .required("Please confirm your password"),
  });
};

function FormActions() {
  const { isSubmitting } = useFormState();

  return (
    <FormActionButton disabled={isSubmitting} type="submit">
      Create an Account
    </FormActionButton>
  );
}

function Form() {
  const { setUser } = useAuthActions();
  const { setTokensInfo } = useAuthTokens();
  const fetchAuthLogin = useAuthLoginService();
  const fetchAuthSignup = useAuthSignUpService();

  const validationSchema = useValidationSchema();

  const methods = useForm<SignUpFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { handleSubmit, setError } = methods;

  const onSubmit = handleSubmit(async (formData) => {
    const { data: dataSignUp, status: statusSignUp } =
      await fetchAuthSignup(formData);

    if (statusSignUp === HTTP_CODES_ENUM.BAD_REQUEST) {
      setError("root", {
        type: "manual",
        message: "Unable to create  your account",
      });
      return;
    }

    const { data: dataSignIn, status: statusSignIn } = await fetchAuthLogin({
      email: formData.email,
      password: formData.password,
    });

    if (statusSignIn === HTTP_CODES_ENUM.OK) {
      setTokensInfo({
        token: dataSignIn.token,
        refreshToken: dataSignIn.refreshToken,
        tokenExpires: dataSignIn.tokenExpires,
      });
      setUser(dataSignIn.user);
    }
  });

  return (
    <FormProvider {...methods}>
      <form
        action="#"
        className="space-y-6"
        id="signup-form"
        method="POST"
        onSubmit={onSubmit}
      >
        <div className="mb-4 grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormTextInput<SignUpFormData>
                name="firstName"
                label="First name"
                type="text"
                testId="firstname"
                autoFocus
              />
              <FormTextInput<SignUpFormData>
                name="lastName"
                label="Last name"
                type="text"
                testId="lastname"
                autoFocus
              />
            </div>
          </div>

          <div className="col-span-12">
            <FormTextInput<SignUpFormData>
              name="email"
              label="Email address"
              type="email"
              testId="email"
              autoFocus
            />
          </div>

          <div className="col-span-12">
            <FormTextInput<SignUpFormData>
              name="password"
              label="Password"
              type="password"
              testId="password"
              autoFocus
            />
          </div>

          <div className="col-span-12">
            <FormTextInput<SignUpFormData>
              name="confirmPassword"
              label="Confirm password"
              type="password"
              testId="configmpassword"
              autoFocus
            />
          </div>
        </div>

        <div className="col-span-12">
          <div className="flex items-start gap-3 py-1">
            <div className="flex items-center h-5">
              <Checkbox />
            </div>
            <Label>
              I agree to the{" "}
              <a
                className="text-primary hover:underline font-semibold"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className="text-primary hover:underline font-semibold"
                href="#"
              >
                Privacy Policy
              </a>
              .
            </Label>
          </div>
        </div>

        <div className="col-span-12">
          <FormActions />
        </div>

        <div className="col-span-12">
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <Label className="px-4 bg-white text-on-surface-variant font-label-sm text-label-sm">
                OR CONTINUE WITH
              </Label>
            </div>
          </div>
        </div>

        <div className="col-span-12">
          <button
            className="w-full bg-white border border-outline-variant text-on-surface py-4 rounded-lg font-body-md text-body-md flex justify-center items-center gap-3 hover:bg-surface-muted active:scale-[0.98] transition-all"
            type="button"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              ></path>
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              ></path>
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              ></path>
            </svg>
            Sign up with Google
          </button>
        </div>

        <div className="col-span-12">
          <div className="pt-8 text-center">
            <Label>
              Already have an account?
              <Link
                className="text-primary font-bold hover:underline transition-all"
                href="/auth/signin"
              >
                {" "}
                Sign in
              </Link>
            </Label>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

function SignUp() {
  return (
    <AuthPageLayout
      heroImageUrl="/images/signup-panel-bg.png"
      heroImageAlt="A breathtaking, cinematic view of a luxury infinity pool overlooking the turquoise Mediterranean coast of Amalfi at sunset."
      heading="Create your account"
      subheading="Enter your details to join our premium travel marketplace."
    >
      <Form />
    </AuthPageLayout>
  );
}

export default withPageRequiredGuest(SignUp);
