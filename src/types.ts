import { AxiosResponse } from "axios";

export interface IUser { email: string, password: string };

export interface IUserCreated extends IUser {
    id: string,
    createdAt: Date
}

export interface IUserSaved {
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

export interface IUsersList {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: IUserSaved[]
}


export type TError = AxiosResponse<{ error: string }>;