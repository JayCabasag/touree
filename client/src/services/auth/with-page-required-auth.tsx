"use client";

import { useRouter } from "next/navigation";
import useAuth from "./use-auth";
import { FunctionComponent, useEffect } from "react";
import { RoleEnum } from "../api/types/role";

type PropsType = {
  params?: { [key: string]: string | string[] | undefined };
  searchParams?: { [key: string]: string | string[] | undefined };
};

type OptionsType = {
  roles: RoleEnum[];
};

const roles = Object.values(RoleEnum).filter(
  (value) => !Number.isNaN(Number(value)),
) as RoleEnum[];

function withPageRequiredAuth(
  Component: FunctionComponent<PropsType>,
  options?: OptionsType,
) {
  const optionRoles = options?.roles || roles;

  return function WithPageRequiredAuth(props: PropsType) {
    const { user, isLoaded } = useAuth();
    const router = useRouter();
    useEffect(() => {
      const check = () => {
        if (user || !isLoaded) return;

        const currentLocation = window.location.toString();
        const returnToPath =
          currentLocation.replace(new URL(currentLocation).origin, "") || `/`;
        const params = new URLSearchParams({
          returnTo: returnToPath,
        });

        let redirectTo = `/auth/signin?${params.toString()}`;

        if (user) {
          redirectTo = `/auth/signin`;
        }

        router.replace(redirectTo);
      };

      check();
    }, [user, isLoaded, router]);

    return user ? <Component {...props} /> : null;
  };
}

export default withPageRequiredAuth;
