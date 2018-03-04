import React from "react";
import "./LoginBtn.css";
import { Link } from "react-router-dom";

const LoginBtn = props => (
    <Link to="/login">
        <button type="button" className="btn btn-login btn-lg btn-block" {...props}>
            LOG IN
        </button>
    </Link>
);

export default LoginBtn;