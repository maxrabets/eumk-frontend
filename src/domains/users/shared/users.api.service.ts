import { apiService } from "common/services";
import { ENDPOINTS } from "common/constants";
import { IUserDetails } from "./types";

export const getUsers = async () => {
  const response = await apiService.get(ENDPOINTS.USERS.GET_ALL);
  return response.data;
};

export const deleteUser = async (login: string) => {
  return await apiService.remove(`${ ENDPOINTS.USERS.DELETE }/${ login }`);
};

export const getUserDetails = async (login: string) => {
  const response = await apiService.get(`${ ENDPOINTS.USERS.GET_USER_DETAILS }/${ login }`);
  return response.data;
};

export const setUserDetails = async (login: string, userDetails: IUserDetails) => {
  const response = await apiService.put(`${ ENDPOINTS.USERS.SET_USER_DETAILS }/${ login }`, userDetails);
  return response.data;
};
