import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {ISubmit} from "../../types";
import AddForm from "./AddForm";
import Spinner from "../../components/Spinners/Spinner";

const EditForm = () => {

    const { id } = useParams();

    const [edit, setEdit] = useState<ISubmit | null>(null);

    const [loading, setLoading] = useState(false);

    return (
        <div>
            {!loading && edit ? (
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