import React, { FC, useCallback, useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";

import { IUser } from "domains/users/shared/types";
import { deleteUser, getUsers } from "domains/users/shared/users.api.service";
import { URLs } from "common/constants";

const UsersPage: FC = () => {
    const { t } = useTranslation("users");
    const [ users, setUsers ] = useState<IUser[]>([ ]);

    useEffect(() => {
        getUsers().then((users) => {
            setUsers(users);
        });
    }, []);

    const onDelete = useCallback(async (user: IUser) => {
        const response = await deleteUser(user.login);
        if (response.status === 200) {
            const usersCopy = users.slice();
            usersCopy.splice(usersCopy.indexOf(user), 1);
            setUsers(usersCopy);
        }
    }, [ users ]);

    return (
        <>
            <h1>{ t("title", { ns: "users" }) }</h1>
            <TableContainer component={ Paper }>
                <Table sx={ { minWidth: 650 } }>
                    <TableHead>
                        <TableRow>
                            <TableCell>{ t("user.login", { ns: "users" }) }</TableCell>
                            <TableCell>{ t("user.role", { ns: "users" }) }</TableCell>
                            <TableCell>{ t("user.registrationDate", { ns: "users" }) }</TableCell>
                            <TableCell>{ t("user.lastLoginDate", { ns: "users" }) }</TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { users.map((user) => (
                            <TableRow
                                key={ user.login }
                            >
                                <TableCell component="th" scope="row">
                                    { user.login }
                                </TableCell>
                                <TableCell>{ user.role }</TableCell>
                                <TableCell>{ user.registrationDate }</TableCell>
                                <TableCell>{ user.lastLoginDate }</TableCell>
                                <TableCell>
                                    <Button onClick = { () => onDelete(user) }>{ t("user.delete") }</Button>
                                    <Button component={ Link } to={ URLs.USERS + user.login }>
                                        { t("user.edit") }
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default UsersPage;
