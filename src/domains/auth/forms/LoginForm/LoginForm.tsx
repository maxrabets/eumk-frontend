import React, { FC } from "react";

import { Button, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";

import { validationSchema } from "./validationSchema";

const RegistrationForm: FC = () => {
  const { t } = useTranslation("common");
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="vertical-form">
      <h1>{t("login.title", { ns: "auth" })}</h1>
      <form onSubmit={ formik.handleSubmit }>
        <TextField
          fullWidth
          name="login"
          label={ t("forms.inputs.login", { ns: "auth" }) }
          value={ formik.values.login }
          onChange={ formik.handleChange }
          error={ formik.touched.login && Boolean(formik.errors.login) }
          helperText={ formik.touched.login && formik.errors.login }
        />
        <TextField
          fullWidth
          name="password"
          label={ t("forms.inputs.password", { ns: "auth" }) }
          value={ formik.values.password }
          onChange={ formik.handleChange }
          error={ formik.touched.password && Boolean(formik.errors.password) }
          helperText={ formik.touched.password && formik.errors.password }
        />
        <Button variant="contained" type="submit">
          {t("forms.buttons.submit", { ns: "common" })}
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
