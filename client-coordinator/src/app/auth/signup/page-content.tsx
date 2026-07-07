"use client";

import { FormActionButton } from "@/components/form/form-action-button";
import FormCheckboxInput from "@/components/form/form-checkbox";
import FormTextInput from "@/components/form/form-text-input";
import { Label } from "@/components/ui/label";
import {
  useAuthLoginService,
  useAuthSignUpService,
} from "@/services/api/services/auth";
import HTTP_CODES_ENUM from "@/services/api/types/http-codes";
import useAuthActions from "@/services/auth/use-auth-actions";
import useAuthTokens from "@/services/auth/use-auth-tokens";
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
  policy: TPolicy[];
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
    policy: yup.array().min(1, "Please agree to terms and policy").required(),
  });
};

function FormActions() {
  const { isSubmitting } = useFormState();

  return (
    <FormActionButton disabled={isSubmitting} type="submit">
      Submit Application
    </FormActionButton>
  );
}

const Form = () => {
  const { setUser } = useAuthActions();
  const { setTokensInfo } = useAuthTokens();
  const fetchAuthLogin = useAuthLoginService();
  const fetchAuthSignup = useAuthSignUpService();

  const validationSchema = useValidationSchema();
  const policyOptions = [{ id: "policy", name: "I agree to the " }];

  const methods = useForm<SignUpFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      policy: [],
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
          <FormCheckboxInput
            name="policy"
            label=""
            testId="privacy"
            options={policyOptions}
            keyValue="id"
            keyExtractor={(option) => option.id.toString()}
            renderOption={(option) => (
              <span>
                {option.name}
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  className="text-primary underline-offset-4 underline"
                >
                  Terms of Service and Privacy Policy
                </Link>
              </span>
            )}
          />
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
};

const SignUp = () => {
  return (
    <>
      <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-on-surface">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-80 scale-105 transition-transform duration-10000ms hover:scale-100"
            data-alt="A cinematic wide-angle shot of a luxurious overwater villa resort in the Maldives at sunset. The sky is painted in deep oranges and soft purples, reflecting off the crystal clear turquoise lagoon. The architecture is refined and modern, featuring natural wood and glass. This high-end travel aesthetic uses a warm, premium color palette to evoke aspiration and elite status, perfectly aligned with the Touree brand."
            src="/images/signup-bg.png"
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-on-surface via-on-surface/40 to-transparent z-10"></div>

        <div className="relative z-20 w-full flex flex-col justify-between p-margin-desktop">
          <div className="max-w-xl">
            <h1 className="font-headline-lg text-headline-lg text-white mb-6">
              Join our global network of elite coordinators.
            </h1>
            <p className="font-body-lg text-body-lg text-white/80 leading-relaxed">
              Empower travelers by crafting bespoke experiences. Access
              exclusive tools, global partnerships, and a community dedicated to
              the art of premium travel.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="glass-effect rounded-xl px-6 py-4 flex items-center gap-4">
              <span className="material-symbols-outlined text-primary-fixed text-3xl">
                public
              </span>
              <div>
                <p className="font-label-sm text-white/60">Global Reach</p>
                <p className="font-headline-md text-white">140+ Countries</p>
              </div>
            </div>
            <div className="glass-effect rounded-xl px-6 py-4 flex items-center gap-4">
              <span className="material-symbols-outlined text-primary-fixed text-3xl">
                verified_user
              </span>
              <div>
                <p className="font-label-sm text-white/60">Verification</p>
                <p className="font-headline-md text-white">Elite Status</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:w-1/2 flex items-center justify-center p-margin-mobile md:p-margin-desktop bg-surface">
        <div className="w-full max-w-md space-y-8">
          <div className="lg:hidden mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-headline-md font-headline-md font-bold text-primary">
                Touree
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Apply as Coordinator
            </h2>
            <p className="text-on-surface-variant font-body-md">
              Start your journey as a travel experience designer today.
            </p>
          </div>

          <Form />

          <div className="pt-12 border-t border-outline-variant/30 flex justify-between items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-label-sm uppercase tracking-tighter">
              Verified Provider
            </span>
            <div className="flex gap-4">
              <span className="material-symbols-outlined">verified</span>
              <span className="material-symbols-outlined">shield</span>
              <span className="material-symbols-outlined">hotel_class</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
