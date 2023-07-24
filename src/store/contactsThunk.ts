import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {IGet} from "../types";

export const postContacts = createAsyncThunk<void, IGet>(
    "post/fetch",
    async (data) => {
        await axiosApi.post(`/contacts.json`, data);
    },
);