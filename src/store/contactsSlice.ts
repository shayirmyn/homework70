import {IGet, IGet2} from "../types";
import { createSlice } from "@reduxjs/toolkit";
import {getAllContacts, getOneContact, postContacts} from "./contactsThunk";

interface IShowsState {
    contacts: IGet2[] | [];
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

        builder.addCase(getAllContacts.pending, state => {
            state.getLoading = true;
        });

        builder.addCase(getAllContacts.fulfilled, (state, {payload}) => {
            state.getLoading = false;
            state.contacts = payload;
        });

        builder.addCase(getAllContacts.rejected, state => {
            state.getLoading = false;
        });
    },
});

export const contactsReducers = getContacts.reducer;
