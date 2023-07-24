import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {IApiGet, IGet, IGet2} from "../types";

export const postContacts = createAsyncThunk<void, IGet>(
    "post/fetch",
    async (data) => {
        await axiosApi.post(`/contacts.json`, data);
    },
);

export const getOneContact = createAsyncThunk<IGet | null, string>(
    "getOne/fetch",
    async (id) => {
        const request = await axiosApi(`/contacts/${id}.json`);

        if (request.data) {
            return request.data;
        }

        return null;
    },
);

export const getAllContacts = createAsyncThunk<IGet2[], undefined>(
    "getAll/fetch",
    async () => {
        const request = await axiosApi<IApiGet | null>("/contacts.json");
        const requestData = request.data;

        let newContacts: IGet2[] = [];

        if (requestData) {
            newContacts = Object.keys(requestData).map((key) => {
                return {
                    ...requestData[key],
                    id: key,
                };
            });
        }

        return newContacts;
    },
);