import React, { FC } from "react";

import { RegistrationForm } from "domains/auth";

import "./RegistrationPage.scss";

const RegistrationPage: FC = () => {
  return (
    <RegistrationForm className="registration-form"/>
  );
};

export default RegistrationPage;
