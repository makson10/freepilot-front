'use client';
import { getAccessToken } from '@/utils/cookie';
import { useAppDispatch } from '../../hooks';
import { setUser } from './userSlice';
import { useVerifyMutation } from '../../api/authApi';
import { useEffect } from 'react';

const InitializeUser = () => {
	const token = getAccessToken();
	const dispatch = useAppDispatch();
	const [verifyUser] = useVerifyMutation();

	useEffect(() => {
		if (!token) return;
		verifyUser(token).then(({ data }) => dispatch(setUser(data || null)));
	}, [dispatch, verifyUser, token]);

	return null;
};

export default InitializeUser;
