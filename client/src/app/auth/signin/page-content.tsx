"use client";

import { AuthPageLayout } from "@/components/layout/AuthPageLayout";
import { useAuthLoginService } from "@/services/api/services/auth";
import { FormProvider, useForm, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormActionButton } from "@/components/form/form-action-button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import useAuthActions from "@/services/auth/use-auth-actions";
import useAuthTokens from "@/services/auth/use-auth-tokens";
import HTTP_CODES_ENUM from "@/services/api/types/http-codes";
import FormTextInput from "@/components/form/form-text-input";
import withPageRequiredGuest from "@/services/auth/with-page-requred-guests";
import Link from "next/link";
import * as yup from "yup";
import { isGoogleAuthEnabled } from "@/services/social-auth/google/google-auth";
import SocialAuth from "@/services/social-auth/social-auth";

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

function Form() {
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
                Don&apos;t have an account?
                <Link
                  className="text-primary font-bold hover:underline transition-all"
                  href="/auth/signup"
                >
                  {" "}
                  Sign up
                </Link>
              </Label>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

function SignIn() {
  return (
    <AuthPageLayout
      heroImageUrl="/images/signin-panel-bg.png"
      heroImageAlt="Touree curated travel experience"
      heading="Discover the world's most curated experiences."
      subheading="Experience travel like never before with Touree's premium marketplace."
    >
      <Form />
    </AuthPageLayout>
  );
}

export default withPageRequiredGuest(SignIn);
