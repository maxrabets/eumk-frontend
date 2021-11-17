export const basicApiPath = "/api/";
export const basicAuthPath = basicApiPath + "auth/";
export const basicUsersPath = basicApiPath + "users";

const ENDPOINTS = {
    AUTH: {
        REGISTRATION: "users",
        LOGIN: basicAuthPath + "login",
    },
    USERS: {
        GET_ALL: basicUsersPath,
        DELETE: basicUsersPath,
        SET_USER_DETAILS: basicUsersPath,
        GET_USER_DETAILS: basicUsersPath,
    },
};

export default ENDPOINTS;
