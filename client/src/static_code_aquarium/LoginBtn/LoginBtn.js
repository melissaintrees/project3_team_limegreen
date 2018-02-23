import React from "react";
import "./LoginBtn.css";

const LoginBtn = props => (
    <button type="button" className="btn btn-login btn-lg btn-block" {...props}>
        LOG IN
    </button>
);

export default LoginBtn;