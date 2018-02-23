import React from "react";
import "./SignupBtn.css";

const SignupBtn = props => (
    <button type="button" className="btn btn-signup btn-lg btn-block" {...props}>
        Sign Up!
    </button>
);

export default SignupBtn;