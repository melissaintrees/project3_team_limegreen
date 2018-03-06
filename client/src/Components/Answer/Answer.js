import React from 'react';
import "./Answer.css"

// Answer component for quiz. Creates radio button selection.
const Answer = (props) => {
    const questionGroup = `questionIdentifier${props.questionIndex}`;
    return (
    <div className="answerOption">
        <ul>
                <input
                type="radio"
                className="radioCustomButton"
                name={questionGroup}
                onChange={props.userSelectionClick}
                value={props.answerOptions}
                >
                </input>
            <label className="radioCustom">
                {props.answerOptions}
            </label>
        </ul>
    </div>
    )};

export default Answer;
