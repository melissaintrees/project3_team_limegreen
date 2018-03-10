import React from "react";
import "./SignupBtn.css";
import { Link } from "react-router-dom";


const SignupBtn = props => (
    <Link to="/signup">
        <button type="button" className="btn btn-signup btn-lg btn-block" {...props}>
            SIGN UP
        </button>
    </Link>
);

export default SignupBtn;