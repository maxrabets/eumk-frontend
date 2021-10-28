import React, { FC, useCallback } from "react";

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

interface IProps {
    className?: string;
}

const RegistrationForm: FC<IProps> = ({ className }) => {
    const { t } = useTranslation("common");
    const [ role, setRole ] = React.useState("student");

    const handleRadioChange = useCallback((event: any) => {
        setRole(event.target.value);
    }, []);

    return (
        <div className={ className }>
            <h1>{ t("title", { ns: "auth" }) }</h1>
            <form className="vertical-form">
                <FormControl component="fieldset">
                    <FormLabel component="legend">{ t("forms.inputs.role.title", { ns: "auth" }) }</FormLabel>
                    <RadioGroup
                        aria-label="role"
                        name="radio-buttons-group"
                        value={ role }
                        onChange={ handleRadioChange }
                    >
                        <FormControlLabel
                            value="student"
                            control={ <Radio /> }
                            label={ t("forms.inputs.role.student", { ns: "auth" }) }
                        />
                        <FormControlLabel
                            value="teacher"
                            control={ <Radio /> }
                            label={ t("forms.inputs.role.teacher", { ns: "auth" }) }
                        />
                    </RadioGroup>
                </FormControl>
                <TextField fullWidth label={ t("forms.inputs.surname", { ns: "auth" }) } />
                <TextField fullWidth label={ t("forms.inputs.name", { ns: "auth" }) } />
                <TextField fullWidth label={ t("forms.inputs.patronymic", { ns: "auth" }) } />
                <TextField fullWidth label={ t("forms.inputs.email", { ns: "auth" }) } />
                {
                    role === "student" && <TextField fullWidth label={ t("forms.inputs.group", { ns: "auth" }) } />
                }
                <TextField fullWidth label={ t("forms.inputs.password", { ns: "auth" }) } />
                <TextField fullWidth label={ t("forms.inputs.confirmPassword", { ns: "auth" }) } />
                <Button variant="contained">{ t("forms.buttons.submit", { ns: "common" }) }</Button>
            </form>
        </div>
    );
};

export default RegistrationForm;
