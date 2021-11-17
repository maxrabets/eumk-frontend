import axios, { AxiosRequestConfig } from "axios";

export function get(url: string, config?: AxiosRequestConfig) {
    return axios.get(url, config);
}

export function post(url: string, data: any, config?: AxiosRequestConfig) {
    return axios.post(url, data, config);
}

export function remove(url: string, config?: AxiosRequestConfig) {
    return axios.delete(url, config);
}

export function put(url: string, data: any, config?: AxiosRequestConfig) {
    return axios.put(url, data, config);
}
