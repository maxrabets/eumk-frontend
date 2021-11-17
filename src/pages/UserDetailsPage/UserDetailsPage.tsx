import React, { FC, useCallback, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { UserDetailsForm } from "domains/users";
import { IUserDetails } from "domains/users/shared/types";
import { getUserDetails, setUserDetails } from "domains/users/shared/users.api.service";
import { Spinner } from "common/components";

const UserDetailsPage: FC = () => {
    const { userLogin } = useParams<{ userLogin: string }>();
    const [ user, setUser ] = useState<IUserDetails | null>(null);

    useEffect(() => {
        getUserDetails(userLogin).then(userDetails => {
            // userDetails.lastLoginDate = Date.parse(userDetails.lastLoginDate);
            // userDetails.registrationDate = Date.parse(userDetails.registrationDate);
            setUser(userDetails);
            console.log(userDetails);
        });
    }, [ userLogin ]);

    const onSubmit = useCallback((values: IUserDetails) => {
        setUserDetails(userLogin, values);
    }, [ userLogin ]);

    if (!user) {
        return <Spinner />;
    }

    return (
        <UserDetailsForm user = { user } onSubmit = { onSubmit }/>
    );
};

export default UserDetailsPage;
