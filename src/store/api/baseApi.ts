import { emptyApi as api } from "./emptyApi";
export const addTagTypes = ["auth"] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      authSignUp: build.mutation<AuthSignUpApiResponse, AuthSignUpApiArg>({
        query: (queryArg) => ({
          url: `/auth/signup`,
          method: "POST",
          body: queryArg.signUpDto,
        }),
        invalidatesTags: ["auth"],
      }),
      authLogIn: build.mutation<AuthLogInApiResponse, AuthLogInApiArg>({
        query: (queryArg) => ({
          url: `/auth/login`,
          method: "POST",
          body: queryArg.logInDto,
        }),
        invalidatesTags: ["auth"],
      }),
      authVerify: build.mutation<AuthVerifyApiResponse, AuthVerifyApiArg>({
        query: () => ({ url: `/auth/verify`, method: "POST" }),
        invalidatesTags: ["auth"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as baseApi };
export type AuthSignUpApiResponse =
  /** status 201 User created successfully. */ AccessTokenDto;
export type AuthSignUpApiArg = {
  signUpDto: SignUpDto;
};
export type AuthLogInApiResponse =
  /** status 200 User logged in successfully. */ AccessTokenDto;
export type AuthLogInApiArg = {
  logInDto: LogInDto;
};
export type AuthVerifyApiResponse =
  /** status 200 User is authenticated. */ VerifiedUserDto;
export type AuthVerifyApiArg = void;
export type AccessTokenDto = {
  access_token: string;
};
export type SignUpDto = {
  fullName: string;
  role: string;
  email: string;
  password: string;
};
export type LogInDto = {
  email: string;
  password: string;
};
export type VerifiedUserDto = {
  id: number;
  fullName: string;
  role: "freelancer" | "customer";
  created_at: string;
  email: string;
  password: string;
};
export const {
  useAuthSignUpMutation,
  useAuthLogInMutation,
  useAuthVerifyMutation,
} = injectedRtkApi;
