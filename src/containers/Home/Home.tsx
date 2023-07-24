import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getAllContacts} from "../../store/contactsThunk";
import {IGet2} from "../../types";

const Home = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllContacts());
    }, [dispatch]);

    const contacts = useAppSelector(state => state.contacts.contacts);

    const onClickModal = (data: IGet2) => {
        // <Modal />
    };

    return (
        <div>
            {
                contacts.map((every, index) => (
                    <div key={index} className="mt-5 formDiv shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                         onClick={() => onClickModal(every)}>
                        <p>{every.name}</p>
                        <p>{every.phone}</p>
                        <p>{every.email}</p>
                       <div className="divImg">
                           <img src={every.photo} alt={every.name}/>
                       </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Home;
