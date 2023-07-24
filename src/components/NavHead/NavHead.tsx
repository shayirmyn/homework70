import React from 'react';
import {NavLink} from "react-router-dom";

const NavHead = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand ms-5">
                        <NavLink className="nav-link" to="/">
                            Contacts
                        </NavLink>
                    </span>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto me-5">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/new-contact">
                                    Add new contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavHead;