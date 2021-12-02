import * as yup from "yup";

import {
  groupNumberValidationSchema,
  loginValidationSchema,
  nameValidationSchema,
  passwordValidationSchema,
  patronymicValidationSchema,
  roleValidationSchema,
  surnameValidationSchema,
} from "common/constants/validation/validationSchemas";
import { requiredMessage } from "common/constants/validation/validationMessages";
import { Role } from "domains/users/shared/types";


export const validationSchema = yup.object({
  role: roleValidationSchema.required(requiredMessage),
  login: loginValidationSchema.required(requiredMessage),
  name: nameValidationSchema.required(requiredMessage),
  surname: surnameValidationSchema.required(requiredMessage),
  patronymic: patronymicValidationSchema,
  group: groupNumberValidationSchema
    .when("role", {
      is: Role.Student,
      then: groupNumberValidationSchema.required(requiredMessage),
    }),
  password: passwordValidationSchema.required(requiredMessage),
  confirmPassword: passwordValidationSchema.required(requiredMessage)
    .test({
      message: "Пароли должны совпадать",
      test(value) {
        return value === this.parent.password;
      },
    }),
});
