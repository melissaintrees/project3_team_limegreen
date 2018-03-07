import React from "react";
import "./SubmitBtn.css";
import { Link } from "react-router-dom";


const SubmitBtn = (props) => (
    <Link to="/score">
        <button 
        type="button" 
        className="btn btn-login btn-lg btn-block" {...props}
        onChange={props.userSubmitGame}
        >
            Get Your Score!
        </button>
    </Link>
);
export default SubmitBtn;