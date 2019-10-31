export interface IUser { email: string, password: string };

export interface IUserCreated extends IUser {
    id: string,
    createdAt: Date
}

export type TError = {
    message: string
}