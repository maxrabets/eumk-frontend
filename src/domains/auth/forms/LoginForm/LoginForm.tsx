import React, { FC } from "react";

import { Button, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

const RegistrationForm: FC = () => {
    const { t } = useTranslation("common");

    return (
        <div className="vertical-form">
            <h1>{ t("login.title", { ns: "auth" }) }</h1>
            <form>
                <TextField fullWidth label={ t("forms.inputs.email", { ns: "auth" }) } />
                <TextField fullWidth label={ t("forms.inputs.password", { ns: "auth" }) } />
                <Button variant="contained">{ t("forms.buttons.submit", { ns: "common" }) }</Button>
            </form>
        </div>
    );
};

export default RegistrationForm;
