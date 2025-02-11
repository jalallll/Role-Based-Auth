export interface RegisterInput {
    userName: string;
    email: string;
    password: string;
    role: string;
}

export interface LoginWithEmailInput {
    email: string;
    password: string;
}

export interface LoginWithUsernameInput {
    userName: string;
    password: string;
}
