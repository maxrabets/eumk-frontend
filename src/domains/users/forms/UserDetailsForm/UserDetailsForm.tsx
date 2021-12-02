import React, { FC } from "react";

import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

import { IUserDetails, Role } from "domains/users/shared/types";
import { validationSchema } from "./validationSchema";


interface IProps {
    user: IUserDetails,
    onSubmit: (values: IUserDetails) => void,
    className?: string,
}

const UserDetailsForm: FC<IProps> = ({ user, onSubmit, className }) => {
  const { t } = useTranslation("users");

  const formik = useFormik({
    initialValues: {
      role: user.role,
      surname: user.surname,
      name: user.name,
      patronymic: user.patronymic || "",
      login: user.login,
      group: user.group || "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <div className={ className }>
      <h1>{t("user.details.title") + ": " + user.login}</h1>
      <Typography>{t("user.registrationDate") + ": " + user.registrationDate}</Typography>
      <Typography>{t("user.lastLoginDate") + ": " + user.lastLoginDate}</Typography>
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
              disabled
              name="role"
              value={ Role.Student }
              control={ <Radio/> }
              label={ t("forms.inputs.role.student", { ns: "auth" }) }
            />
            <FormControlLabel
              disabled
              name="role"
              value={ Role.Teacher }
              control={ <Radio/> }
              label={ t("forms.inputs.role.teacher", { ns: "auth" }) }
            />
            <FormControlLabel
              disabled
              name="role"
              value={ Role.Administrator }
              control={ <Radio/> }
              label={ t("forms.inputs.role.administrator", { ns: "auth" }) }
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
        <Button variant="contained" type="submit">
          {t("forms.buttons.submit", { ns: "common" })}
        </Button>
      </form>
    </div>
  );
};

export default UserDetailsForm;
