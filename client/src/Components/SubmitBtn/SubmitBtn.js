import React from "react";
import "./SubmitBtn.css";
import { Link } from "react-router-dom";


const SubmitBtn = (props) => (
        <button 
            type="button" 
            className="btn btn-login btn-lg btn-block" {...props}
            onClick={props.userSubmitGame}
        >
            Get Your Score!
        </button>
);
export default SubmitBtn;