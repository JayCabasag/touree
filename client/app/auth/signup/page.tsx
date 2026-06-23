import { SignupForm } from "@/components/signup-form";

export default function SignUpPage() {
  return (
    <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl overflow-hidden auth-card-shadow my-12 mx-auto">
      <div className="hidden lg:block relative min-h-162">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-alt="A breathtaking, cinematic view of a luxury infinity pool overlooking the turquoise Mediterranean coast of Amalfi at sunset. The sky is a warm palette of sunset red, soft orange, and deep crimson. Elegant minimalist architecture surrounds the water, reflecting the premium Touree aesthetic."
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCPFka3sEihqrBqf7XANFMM8W22HTdKHg9wLw0rejU_iPMDwbgM5V1yq76DYfMkImcCTlfzbbZ348NG_8B5ndRWTZ6wNBhiGuSAme7KTZw7jOXRe6z0zm-sHLSW7PMndbsEMe1rKlSDV1Q59csdRxxYhGEoJtd65pCKHdC86dZHDWT-Emlj9ERgQ8xiILPaCQ3FwOXf9u1GupF3CvEK6mJc52d8gcXlq8A8sCe_YhMh0aJsmrKrdTqqXIUyNFbcbM8RcgOQ-MGXYOI")',
          }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
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
              Create your account
            </h1>
            <p className="font-body-md text-body-md text-text-secondary">
              Enter your details to join our premium travel marketplace.
            </p>
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
