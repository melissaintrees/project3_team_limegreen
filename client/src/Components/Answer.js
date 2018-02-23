import React from 'react';
import PropTypes from 'prop-types';
import  questions from '../mockdata/gameQuestions';

// Answer component for quiz. Creates radio button selection.
const Answer = (props) =>
    <li className="answerOption">
            <h2
            type="radio"
            className="radioCustomButton"
            name="radioGroup"
            >
            {props.value}
            </h2>
        <label className="radioCustom">
      </label>
    </li>;

export default Answer;
