import {IGet, ISubmit} from "../types";
import { createSlice } from "@reduxjs/toolkit";
import {postContacts} from "./contactsThunk";

interface IShowsState {
    contacts: IGet[];
    contact: ISubmit | null;
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
    },
});

export const contactsReducers = getContacts.reducer;
