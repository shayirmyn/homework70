import React, { PropsWithChildren } from "react";
import NavHead from "../NavHead/NavHead";
const LayOut: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <header>
                <NavHead />
            </header>
            <main className="container-fluid">{children}</main>
        </div>
    );
};

export default LayOut;
