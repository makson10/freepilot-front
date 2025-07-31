import type { User } from "./user.types";

export type AuthSignUpResponse = {
    access_token: string;
}

export type AuthLogInResponse = {
    access_token: string;
}

export type AuthVerifyResponse = User;