import React, { FC } from "react";

import { CircularProgress } from "@mui/material";

import "./Spinner.scss";

interface IProps {
    className?: string;
}

const Spinner: FC<IProps> = ({ className }) => {
    return (
        <div className={ "spinner " + className }>
            <CircularProgress />
        </div>
    );
};

export default Spinner;
