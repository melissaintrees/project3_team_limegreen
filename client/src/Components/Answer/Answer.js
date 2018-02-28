import React from 'react';
// import PropTypes from 'prop-types';
// import  questions from '../mockdata/gameQuestions';

// Answer component for quiz. Creates radio button selection.
const Answer = (props) =>
    <ol className="answerOption">
            <input
            type="radio"
            className="radioCustomButton"
            name="radioGroup"
            >
            </input>
        <label className="radioCustom">
        {props.value}
      </label>
    </ol>;

export default Answer;
