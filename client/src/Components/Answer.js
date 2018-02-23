import React from 'react';
import PropTypes from 'prop-types';
import  questions from '../mockdata/gameQuestions';

// Answer component for quiz. Creates radio button selection.
const Answer = ({ answers, props }) => {
    <li className="answerOption">
            <input
            type="radio"
            className="radioCustomButton"
            name="radioGroup"
            value="Here is a value"
            />
        <label className="radioCustom">
      </label>
    </li>
};

export default Answer;
