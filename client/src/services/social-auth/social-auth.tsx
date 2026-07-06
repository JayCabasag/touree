"use client";

import { isGoogleAuthEnabled } from "./google/google-auth";
import GoogleAuth from "./google/google-config";

export default function SocialAuth() {
  return (
    <div className="flex flex-col gap-4 w-full mx-auto">
      {isGoogleAuthEnabled && (
        <div className="w-full">
          <GoogleAuth />
        </div>
      )}
    </div>
  );
}
