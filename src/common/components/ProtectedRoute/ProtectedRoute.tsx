import React from "react";

import { Route, RouteProps } from "react-router-dom";

const ProtectedRoute = (props: RouteProps) => {
    return (
        <Route { ...props }/>
    );
};

export default ProtectedRoute;
