import type {
	AuthLogInResponse,
	AuthSignUpResponse,
	AuthVerifyResponse,
} from '@/types/api.types';
import type { LogInUser, SignUpUser } from '@/types/user.types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_SERVER_BASE_URL + '/auth',
	}),
	endpoints: (builder) => ({
		signUp: builder.mutation<AuthSignUpResponse, SignUpUser>({
			query: (user) => ({
				url: '/signup',
				method: 'POST',
				body: user,
			}),
		}),
		logIn: builder.mutation<AuthLogInResponse, LogInUser>({
			query: (user) => ({
				url: '/login',
				method: 'POST',
				body: user,
			}),
		}),
		verify: builder.mutation<AuthVerifyResponse, string>({
			query: (jwtToken) => ({
				url: '/verify',
				method: 'POST',
				headers: {
					Authorization: 'Bearer ' + jwtToken,
				},
			}),
		}),
	}),
});

export const { useSignUpMutation, useLogInMutation, useVerifyMutation } =
	authApi;
