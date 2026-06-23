import { SigninForm } from "@/components/signin-form";

export default function SignInPage() {
  return (
    <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl overflow-hidden auth-card-shadow mx-auto my-12">
      <div className="hidden lg:block relative min-h-150">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLDwJ_ngl_RjzKHByWNl6J44hkkz5Wq7Mlp4UtZdbhLGdjrwxLEp-QDWBVUK1CAn1t8ad18R2R0VKsMOPefMIjOsilp1WBhgWTJ3DUb6CCCg-FJSx5R8ntJY6oqZo93bo0X9w-B5bKIT6G5bGFU6l_eT3Gaug4bma1tccYAw48872RE35EX4goHNZK9Qi2FP4XdcwxBteESSvC9gS_V7PWgwF95ZN3c43l7EIegpUv5Ry7qh1wjn3k6UIs16F3v0r5ZxFBpKtJhho')",
          }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-t from-on-surface/60 to-transparent"></div>
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <h2 className="font-headline-lg text-headline-lg mb-4">
            Discover the world's most curated experiences.
          </h2>
          <p className="font-body-lg text-body-lg opacity-90">
            Experience travel like never before with Touree's premium
            marketplace.
          </p>
        </div>
      </div>

      <div className="p-8 md:p-16 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="font-headline-lg text-headline-lg mb-2 text-on-surface">
              Welcome back
            </h1>
            <p className="font-body-md text-body-md text-text-secondary">
              Please enter your details to access your account.
            </p>
          </div>
          <SigninForm />
        </div>
      </div>
    </div>
  );
}
