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
import { isGoogleAuthEnabled } from "@/services/social-auth/google/google-auth";
import SocialAuth from "@/services/social-auth/social-auth";
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

        {isGoogleAuthEnabled && (
          <>
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
              <div className="flex flex-col items-center gap-2 w-full">
                <SocialAuth />
              </div>
            </div>
          </>
        )}

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

export default SignUp;
