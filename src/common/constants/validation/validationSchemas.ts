import * as yup from "yup";

export const loginValidationSchema = yup
    .string();

export const passwordValidationSchema = yup
    .string()
    .min(8, "Пароль должен содержать минимум 8 символов");

export const nameValidationSchema = yup
    .string();

export const surnameValidationSchema = yup
    .string();

export const patronymicValidationSchema = yup
    .string();

export const roleValidationSchema = yup
    .string();

export const groupNumberValidationSchema = yup
    .number();
