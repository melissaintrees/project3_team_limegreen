import React from 'react';
import "./Answer.css"

// Answer component for quiz. Creates radio button selection.
const Answer = props => {
    return (
    <div className="answerOption">
        <ul>
                <input
                type="radio"
                className="radioCustomButton"
                name="radioGroup"
                // onClick={userSelectionClick}
                >
                </input>
            <label className="radioCustom">
                {props.answerOptions}
            </label>
        </ul>
    </div>
    )};

export default Answer;
