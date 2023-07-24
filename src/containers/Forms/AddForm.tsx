import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {ISubmit} from "../../types";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import BtnSpinner from "../../components/Spinners/BtnSpinner";
import {postContacts} from "../../store/contactsThunk";

interface IProps {
    title?: string,
    btnTitle?: string,
    edit?: ISubmit,
}

const AddForm: React.FC<IProps> = ({title, btnTitle, edit}) => {
    const loading = useAppSelector(state => state.contacts)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const initialState = edit
        ? {
            ...edit,
        }
        : {
            name: "",
            phone: "",
            email: "",
            photo: "",
        };

    const [submitData, setSubmitData] = useState<ISubmit>(initialState);

    const dataChanged = (
        event:
            React.ChangeEvent<HTMLInputElement>

    ) => {
        const { name, value } = event.target;

        setSubmitData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await dispatch(postContacts(submitData));
        navigate("/");
    };

    return (
        <div className="mt-5 formDiv shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <div className="col-9 m-auto mt-5 mb-5">
                {title ? title : (<h4>Add new contact</h4>)}
                <form onSubmit={onFormSubmit}>
                    <div className="form-group mt-3">
                        <label htmlFor="title">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={submitData.name}
                            onChange={dataChanged}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="title">Phone</label>
                        <input
                            id="phone"
                            type="text"
                            name="phone"
                            value={submitData.phone}
                            onChange={dataChanged}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="title">Email</label>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            value={submitData.email}
                            onChange={dataChanged}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="description">Photo</label>
                        <input
                            type="text"
                            id="photo"
                            value={submitData.photo}
                            onChange={dataChanged}
                            name="photo"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mt-3 divImg">
                        <label htmlFor="description">Photo preview: </label>
                        <img src={submitData.photo} alt="contactPhoto"/>
                    </div>
                    <button disabled={loading.postLoading || loading.editLoading}
                            type="submit"
                            className="btn btn-primary ms-auto d-block mt-3 me-2"
                    >
                        {loading ? (<BtnSpinner />) : (btnTitle ? btnTitle : (<>Add</>))}
                    </button>
                    <NavLink to="/"
                            className="btn btn-primary ms-auto d-block mt-3 me-2">Back to contacts</NavLink>
                </form>
            </div>
        </div>
    );
};

export default AddForm;