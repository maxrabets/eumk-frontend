import React, { FC } from "react";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AppBar, Button } from "@mui/material";

import { URLs } from "common/constants";

import "./NavigationMenu.scss";

const NavigationMenu: FC = () => {
    const { t } = useTranslation("common");

    return (
        <AppBar className="navigation-menu" position="sticky">
            <Button component={ Link } to={ URLs.SUBJECTS }>
                { t("title", { ns: "subjects" }) }
            </Button>
            <Button component={ Link } to={ URLs.LOGIN }>
                { t("login.title", { ns: "auth" }) }
            </Button>
            <Button component={ Link } to={ URLs.REGISTRATION } variant="text">
                { t("registration.title", { ns: "auth" }) }
            </Button>
            <Button component={ Link } to={ URLs.USERS } variant="text">
                { t("title", { ns: "users" }) }
            </Button>
        </AppBar>
    );
};

export default NavigationMenu;
