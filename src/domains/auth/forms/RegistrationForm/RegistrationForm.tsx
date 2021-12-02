import React, { FC } from "react";

import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";

import { register } from "domains/auth/shared/auth.api.service";
import { validationSchema } from "./validationSchema";
import { Role } from "domains/users/shared/types";

interface IProps {
    className?: string;
}

const RegistrationForm: FC<IProps> = ({ className }) => {
  const { t } = useTranslation("common");

  const formik = useFormik({
    initialValues: {
      role: Role.Student,
      surname: "",
      name: "",
      patronymic: "",
      login: "",
      group: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      const result = await register(values);
      console.log(result);
    },
  });

  return (
    <div className={ className }>
      <h1>{t("title", { ns: "auth" })}</h1>
      <form className="vertical-form" onSubmit={ formik.handleSubmit }>
        <FormControl component="fieldset">
          <FormLabel component="legend">{t("forms.inputs.role.title", { ns: "auth" })}</FormLabel>
          <RadioGroup
            aria-label="role"
            name="role"
            value={ formik.values.role }
            onChange={ (event) => {
              formik.setFieldValue("role", event.currentTarget.value);
            } }
          >
            <FormControlLabel
              name="role"
              value={ Role.Student }
              control={ <Radio/> }
              label={ t("forms.inputs.role.student", { ns: "auth" }) }
            />
            <FormControlLabel
              name="role"
              value={ Role.Teacher }
              control={ <Radio/> }
              label={ t("forms.inputs.role.teacher", { ns: "auth" }) }
            />
          </RadioGroup>
        </FormControl>
        <TextField
          fullWidth
          name="surname"
          label={ t("forms.inputs.surname", { ns: "auth" }) }
          value={ formik.values.surname }
          onChange={ formik.handleChange }
          error={ formik.touched.surname && Boolean(formik.errors.surname) }
          helperText={ formik.touched.surname && formik.errors.surname }
        />
        <TextField
          fullWidth
          name="name"
          label={ t("forms.inputs.name", { ns: "auth" }) }
          value={ formik.values.name }
          onChange={ formik.handleChange }
          error={ formik.touched.name && Boolean(formik.errors.name) }
          helperText={ formik.touched.name && formik.errors.name }
        />
        <TextField
          fullWidth
          name="patronymic"
          label={ t("forms.inputs.patronymic", { ns: "auth" }) }
          value={ formik.values.patronymic }
          onChange={ formik.handleChange }
          error={ formik.touched.patronymic && Boolean(formik.errors.patronymic) }
          helperText={ formik.touched.patronymic && formik.errors.patronymic }
        />
        <TextField
          fullWidth
          name="login"
          label={ t("forms.inputs.login", { ns: "auth" }) }
          value={ formik.values.login }
          onChange={ formik.handleChange }
          error={ formik.touched.login && Boolean(formik.errors.login) }
          helperText={ formik.touched.login && formik.errors.login }
        />
        {
          formik.values.role === Role.Student && (
            <TextField
              fullWidth
              name="group"
              label={ t("forms.inputs.group", { ns: "auth" }) }
              value={ formik.values.group }
              onChange={ formik.handleChange }
              error={ formik.touched.group && Boolean(formik.errors.group) }
              helperText={ formik.touched.group && formik.errors.group }
            />
          )
        }
        <TextField
          fullWidth
          name="password"
          label={ t("forms.inputs.password", { ns: "auth" }) }
          value={ formik.values.password }
          onChange={ formik.handleChange }
          error={ formik.touched.password && Boolean(formik.errors.password) }
          helperText={ formik.touched.password && formik.errors.password }
        />
        <TextField
          fullWidth
          name="confirmPassword"
          label={ t("forms.inputs.confirmPassword", { ns: "auth" }) }
          value={ formik.values.confirmPassword }
          onChange={ formik.handleChange }
          error={ formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword) }
          helperText={ formik.touched.confirmPassword && formik.errors.confirmPassword }
        />
        <Button variant="contained" type="submit">
          {t("forms.buttons.submit", { ns: "common" })}
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
