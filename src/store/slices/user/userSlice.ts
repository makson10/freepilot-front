import type { User } from '@/types/user.types';
import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
	data: User | null;
}

const initialState: UserState = {
	data: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.data = action.payload;
		},
		logOutUser: (state) => {
			state.data = null;
		},
	},
});

export const { setUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;
