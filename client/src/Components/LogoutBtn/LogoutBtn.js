import React from "react";
import "./LogoutBtn.css";

const LogoutBtn = props => (
    <button type="button" className="btn btn-logout btn-lg btn-block" {...props}>
        LOGOUT
    </button>
);

export default LogoutBtn;