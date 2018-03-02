import React from "react";
import "./LogoutBtn.css";
import { Link } from "react-router-dom";

const LogoutBtn = props => (
    <Link to="/">
        <button type="button" className="btn btn-logout btn-lg btn-block" {...props}>
            LOGOUT
        </button>
    </Link>
);

export default LogoutBtn;