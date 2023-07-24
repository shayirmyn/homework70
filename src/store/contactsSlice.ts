import {IGet} from "../types";
import { createSlice } from "@reduxjs/toolkit";
import {getOneContact, postContacts} from "./contactsThunk";

interface IShowsState {
    contacts: IGet[];
    contact: IGet | null;
    getLoading: boolean;
    editLoading: boolean;
    getOneLoading: boolean;
    postLoading: boolean;
}

const initialState: IShowsState = {
    contacts: [],
    contact: null,
    getLoading: false,
    editLoading: false,
    getOneLoading: false,
    postLoading: false,
};

const getContacts = createSlice({
    name: "shows",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(postContacts.pending, state => {
            state.postLoading = true;
        });

        builder.addCase(postContacts.fulfilled, state => {
            state.postLoading = false;
        });

        builder.addCase(postContacts.rejected, state => {
            state.postLoading = false;
        });

        builder.addCase(getOneContact.pending, state => {
            state.getOneLoading = true;
        });

        builder.addCase(getOneContact.fulfilled, (state, {payload}) => {
            state.getOneLoading = false;
            state.contact = payload;
        });

        builder.addCase(getOneContact.rejected, state => {
            state.getOneLoading = false;
        });
    },
});

export const contactsReducers = getContacts.reducer;
