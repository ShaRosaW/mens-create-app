import React from 'react';
import Home from "../../../pages/Home";

function Header() {
    return(
    <>
    <div className="header">
        <span className="h3">
        <Home
            headerName="Home"
            text="Home"
        />
        </span>
    </div>
    </>
    )
}
export default Header;