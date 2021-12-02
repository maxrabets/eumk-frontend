import { AnyAction, Reducer } from "redux";

import { AUTH_ACTIONS } from "./auth.actions";
import { IRegistrationRequestData } from "domains/auth/shared/types";

interface IInitialState {
    user: IRegistrationRequestData | null
}

const initialState: IInitialState = {
  user: null,
};

type TReducer = Reducer<IInitialState, AnyAction>;

export const authReducer: TReducer = (state = initialState, action) => {
  switch (action.type) {
  case AUTH_ACTIONS.REGISTER:
    console.log("register");
    return state;
  default:
    return state;
  }
};
