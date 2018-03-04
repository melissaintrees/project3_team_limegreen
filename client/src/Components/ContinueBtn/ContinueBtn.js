import React from "react";
import "./ContinueBtn.css";


const ContinueBtn = props => (
        <button type="button" className="btn btn-continue btn-lg btn-block" {...props}>
            Continue
        </button>
);

export default ContinueBtn;