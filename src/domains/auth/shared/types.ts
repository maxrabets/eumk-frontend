import { Role } from "domains/users/shared/types";

export interface IRegistrationRequestData {
    name: string;
    surname: string;
    patronymic: string;
    role: Role;
    login: string;
    password: string;
    groupNumber?: string;
}
