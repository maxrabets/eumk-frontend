import { IRegistrationRequestData } from "domains/auth/shared/types";

export const AUTH_ACTIONS = {
    REGISTER: "[AUTH] register",
};

export const register = (user: IRegistrationRequestData) => {
    return {
        type: AUTH_ACTIONS.REGISTER,
        payload: user,
    };
};
