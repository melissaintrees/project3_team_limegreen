import React from "react";
import "./ContinueBtn.css";
import { Link } from "react-router-dom";

const ContinueBtn = props => (
    <Link to="/categories">
        <button type="button" className="btn btn-continue btn-lg btn-block" {...props}>
            Continue
        </button>
    </Link>
);

export default ContinueBtn;