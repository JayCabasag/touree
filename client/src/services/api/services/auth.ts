import { useCallback } from "react";
import { Tokens } from "../types/tokens";
import { User } from "../types/user";
import useFetch from "../use-fetch";
import { API_URL } from "../config";
import wrapperFetchJsonResponse from "../wrapper-fetch-json-response";
import { RequestConfigType } from "./types/request-config";

export type AuthLoginRequest = {
  email: string;
  password: string;
};

export type AuthLoginResponse = Tokens & {
  user: User;
};

export function useAuthLoginService() {
  const fetchBase = useFetch();

  return useCallback(
    (data: AuthLoginRequest) => {
      return fetchBase(`${API_URL}/v1/auth/email/login`, {
        method: "POST",
        body: JSON.stringify(data),
      }).then(wrapperFetchJsonResponse<AuthLoginResponse>);
    },
    [fetchBase],
  );
}

export type AuthSignUpRequest = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type AuthSignUpResponse = void;

export function useAuthSignUpService() {
  const fetchBase = useFetch();

  return useCallback(
    (data: AuthSignUpRequest, requestConfig?: RequestConfigType) => {
      return fetchBase(`${API_URL}/v1/auth/email/register`, {
        method: "POST",
        body: JSON.stringify(data),
        ...requestConfig,
      }).then(wrapperFetchJsonResponse<AuthSignUpResponse>);
    },
    [fetchBase],
  );
}
