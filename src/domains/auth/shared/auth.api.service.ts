import { apiService } from "common/services";
import { ENDPOINTS } from "common/constants";
import { IRegistrationRequestData } from "./types";

export const register = async (user: IRegistrationRequestData) => {
  await apiService.post(ENDPOINTS.AUTH.REGISTRATION, user);
};
