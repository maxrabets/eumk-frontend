export interface IUser {
    login: string;
    role: string;
    registrationDate: Date;
    lastLoginDate: Date;
}

export interface IUserDetails {
    name: string;
    surname: string;
    patronymic?: string;
    role: Role;
    login: string;
    lastLoginDate?: Date;
    registrationDate?: Date;
    group?: string;
}

export enum Role {
    Student = "student",
    Teacher = "teacher",
    Administrator = "administrator"
}
