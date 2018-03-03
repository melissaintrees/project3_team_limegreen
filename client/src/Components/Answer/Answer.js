import React from 'react';
import "./Answer.css"
//answer extend component and pass in props

// import PropTypes from 'prop-types';
// import cssCategory from '../../mockdata/questions';

// Answer component for quiz. Creates radio button selection.
const Answer = props => {
    return (
    <div className="answerOption">
        <ul>
                <input
                type="radio"
                className="radioCustomButton"
                name="radioGroup"
                // onClick={handleAnswerClick}
                >
                </input>
            <label className="radioCustom">
                {props.answers}
            </label>
        </ul>
    </div>
    )};

export default Answer;
