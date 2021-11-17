import * as yup from "yup";

import { loginValidationSchema, passwordValidationSchema } from "common/constants/validation/validationSchemas";

export const validationSchema = yup.object({
    login: loginValidationSchema,
    password: passwordValidationSchema,
});
