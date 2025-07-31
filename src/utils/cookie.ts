import cookie from 'js-cookie';

export const setCookie = (
	key: string,
	value: string,
	options?: typeof cookie.attributes
) => cookie.set(key, value, { ...options });

export const getCookie = (key: string) => cookie.get(key);

export const deleteCookie = (key: string) => cookie.remove(key);

export const setAccessToken = (token: string) =>
	setCookie('token', token, { expires: 7 });

export const getAccessToken = () => getCookie('token');

export const deleteAccessToken = () => deleteCookie('token');
