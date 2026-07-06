"use client";

import { useCallback } from "react";
import { AUTH_REFRESH_URL } from "./config";
import { getTokensInfo, setTokensInfo } from "../auth/auth-token-info";
import { FetchInitType, FetchInputType } from "./types/fetch-params";

let refreshPromise: Promise<void> | null = null;

async function refreshTokens(): Promise<void> {
  if (refreshPromise) return refreshPromise;

  refreshPromise = (async () => {
    try {
      const tokens = getTokensInfo();
      const response = await fetch(AUTH_REFRESH_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokens?.refreshToken}`,
        },
      });

      const newTokens = await response.json();

      if (newTokens.token) {
        setTokensInfo({
          token: newTokens.token,
          refreshToken: newTokens.refreshToken,
          tokenExpires: newTokens.tokenExpires,
        });
      }
    } catch {
      // Refresh failed — callers will proceed with current token
    } finally {
      refreshPromise = null;
    }
  })();

  return refreshPromise;
}

function useFetch() {
  return useCallback(async (input: FetchInputType, init?: FetchInitType) => {
    const tokens = getTokensInfo();

    let headers: HeadersInit = {};

    if (!(init?.body instanceof FormData)) {
      headers = {
        ...headers,
        "Content-Type": "application/json",
      };
    }

    if (tokens?.token) {
      headers = {
        ...headers,
        Authorization: `Bearer ${tokens.token}`,
      };
    }

    if (tokens?.tokenExpires && tokens.tokenExpires - 60000 <= Date.now()) {
      await refreshTokens();
      const refreshedTokens = getTokensInfo();
      if (refreshedTokens?.token) {
        headers = {
          ...headers,
          Authorization: `Bearer ${refreshedTokens.token}`,
        };
      }
    }

    return fetch(input, {
      ...init,
      headers: {
        ...headers,
        ...init?.headers,
      },
    });
  }, []);
}

export default useFetch;
