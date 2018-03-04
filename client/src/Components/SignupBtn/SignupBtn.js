import React from "react";
import "./SignupBtn.css";
import { Link } from "react-router-dom";


const SignupBtn = props => (
    <Link to="/signup">
        <button type="button" className="btn btn-signup btn-lg btn-block" {...props}>
            Sign Up!
        </button>
    </Link>
);

export default SignupBtn;