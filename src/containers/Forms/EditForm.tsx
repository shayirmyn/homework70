import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import AddForm from "./AddForm";
import Spinner from "../../components/Spinners/Spinner";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getOneContact} from "../../store/contactsThunk";

const EditForm = () => {

    const { id } = useParams();

    const dispatch = useAppDispatch();

    const edit = useAppSelector(state => state.contacts.contact);

    const loading = useAppSelector(state => state.contacts);

    useEffect(() => {
        if (id) {
            dispatch(getOneContact(id));
        }
    }, [dispatch, id]);

    return (
        <div>
            {!loading.getOneLoading && edit ? (
                <AddForm
                    title="Edit contact"
                    btnTitle="Edit"
                    edit={edit}
                />
            ) : (
                <Spinner />
            )}
        </div>
    );
};

export default EditForm;