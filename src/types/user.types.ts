export type User = {
	id: number;
	fullName: string;
	role: string;
	created_at: string;
	email: string;
	password: string;
};

export type SignUpUser = Omit<User, 'id' | 'created_at'>;

export type LogInUser = Omit<SignUpUser, 'fullName' | 'role'>;
