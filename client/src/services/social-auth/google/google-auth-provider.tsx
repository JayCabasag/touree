"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { googleClientId, isGoogleAuthEnabled } from "./google-auth";

function GoogleAuthProvider({ children }: { children: React.ReactNode }) {
  return isGoogleAuthEnabled && googleClientId ? (
    <GoogleOAuthProvider clientId={googleClientId} locale="en">
      {children}
    </GoogleOAuthProvider>
  ) : (
    children
  );
}

export default GoogleAuthProvider;
