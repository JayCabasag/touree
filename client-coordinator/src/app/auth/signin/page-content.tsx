"use client";

import { FormProvider, useForm, useFormState } from "react-hook-form";
import Link from "next/link";
import * as yup from "yup";
import { FormActionButton } from "@/components/form/form-action-button";
import { useAuthLoginService } from "@/services/api/services/auth";
import useAuthActions from "@/services/auth/use-auth-actions";
import useAuthTokens from "@/services/auth/use-auth-tokens";
import { yupResolver } from "@hookform/resolvers/yup";
import HTTP_CODES_ENUM from "@/services/api/types/http-codes";
import { Label } from "@/components/ui/label";
import FormTextInput from "@/components/form/form-text-input";
import { Checkbox } from "@/components/ui/checkbox";
import withPageRequiredGuest from "@/services/auth/with-page-requred-guests";

type SignInFormData = {
  email: string;
  password: string;
};

const useValidationSchema = () => {
  return yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });
};

function FormActions() {
  const { isSubmitting } = useFormState();

  return (
    <FormActionButton disabled={isSubmitting} type="submit">
      Sign in
    </FormActionButton>
  );
}

const Form = () => {
  const fetchAuthLogin = useAuthLoginService();

  const { setUser } = useAuthActions();
  const { setTokensInfo } = useAuthTokens();
  const validationSchema = useValidationSchema();

  const methods = useForm<SignInFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, setError } = methods;

  const onSubmit = handleSubmit(async (formData) => {
    const { data, status } = await fetchAuthLogin(formData);

    if (status === HTTP_CODES_ENUM.UNAUTHORIZED) {
      setError("password", {
        type: "manual",
        message: "Incorrect password",
      });
      return;
    }

    if (status === HTTP_CODES_ENUM.OK) {
      setTokensInfo({
        token: data.token,
        refreshToken: data.refreshToken,
        tokenExpires: data.tokenExpires,
      });
      setUser(data.user);
    }
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <div className="mb-4 grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <FormTextInput<SignInFormData>
              name="email"
              label={"Email address"}
              type="email"
              testId="email"
              autoFocus
            />
          </div>

          <div className="col-span-12">
            <FormTextInput<SignInFormData>
              name="password"
              label={"Password"}
              type="password"
              testId="password"
              autoFocus
            />
          </div>

          <div className="col-span-12">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center">
                  <Checkbox />
                </div>
                <span className="font-body-md text-body-md text-text-secondary group-hover:text-on-surface transition-colors">
                  Remember me
                </span>
              </label>
              <Link
                className="font-body-md text-body-md text-secondary hover:underline transition-all"
                href="/auth/forgot-password"
              >
                Forgot password?
              </Link>
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
              Sign in with Google
            </button>
          </div>

          <div className="col-span-12">
            <div className="pt-8 text-center">
              <Label>
                New to Touree?
                <Link
                  className="text-primary font-bold hover:underline transition-all"
                  href="/auth/signup"
                >
                  {" "}
                  Apply to be a Coordinator
                </Link>
              </Label>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

const SignIn = () => {
  return (
    <>
      <section className="relative hidden md:flex md:w-1/2 h-screen overflow-hidden bg-primary-container">
        <div
          className="absolute inset-0 z-0 scale-105 bg-no-repeat bg-cover"
          data-alt="A professional travel coordinator working in a sleek, sun-drenched modern workspace with minimalist white furniture. High-quality photography capturing a person interacting with a high-end laptop, surrounded by luxury travel magazines and a small plant. The lighting is warm and aspirational, reflecting a premium corporate lifestyle with a color palette of deep reds, soft creams, and clean whites. The mood is empowering, focused, and sophisticated."
          style={{
            backgroundImage: "url('/images/signin-bg.png')",
          }}
        ></div>

        <div className="absolute inset-0 bg-linear-to-t from-on-surface via-on-surface/40 to-transparent z-10"></div>

        <div className="relative z-10 flex flex-col justify-between h-full p-margin-desktop text-on-primary">
          <Link href={"/"} className="flex items-center space-x-2">
            <div>
              <h1 className="font-headline-lg text-headline-lg font-extrabold tracking-tight">
                Touree
              </h1>
              <p className="font-label-sm text-label-sm opacity-70">
                Coordinator
              </p>
            </div>
          </Link>
          <div className="max-w-md">
            <h1 className="font-headline-lg text-headline-lg mb-stack-md leading-tight">
              Empowering your travel business.
            </h1>
            <p className="font-body-lg text-body-lg opacity-90">
              Join thousands of professional coordinators curating world-class
              experiences on the Touree marketplace.
            </p>
          </div>
          <div className="font-label-sm text-label-sm opacity-70">
            © 2026 Touree Travel Marketplace.
          </div>
        </div>

        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      </section>
      <section className="flex flex-col flex-1 items-center justify-center p-margin-mobile md:p-margin-desktop bg-surface min-h-screen">
        <div className="md:hidden w-full mb-12 flex justify-center">
          <span className="font-headline-md text-headline-md font-extrabold text-primary tracking-tighter">
            Touree
          </span>
        </div>
        <div className="w-full max-w-md space-y-stack-md">
          <div className="text-center md:text-left mb-8">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">
              Coordinator Login
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Manage your tours, travelers, and bookings.
            </p>
          </div>

          <Form />
        </div>

        <div className="md:hidden mt-auto pt-12 text-center w-full">
          <div className="flex justify-center space-x-4 mb-4">
            <a
              className="font-label-sm text-label-sm text-on-surface-variant opacity-70"
              href="#"
            >
              Help Center
            </a>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant opacity-70"
              href="#"
            >
              Privacy
            </a>
          </div>
          <div className="font-label-sm text-label-sm text-on-surface-variant opacity-50">
            © 2024 Touree Travel
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
