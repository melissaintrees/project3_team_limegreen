import React from 'react';
import PropTypes from 'prop-types';


// Answer component for quiz. Creates radio button selection.
const Answer = ({ answers, handleAnswerClick }) => {
    return (
        <li className="answerOption">
        <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
        onClick={handleAnswerClick}
        />
        <label className="radioCustomLabel" htmlFor={props.answerType}>
            {props.answerContent}
      </label>
        </li>
    );
}


Answer.propTypes = {
    answerType: React.PropTypes.string.isRequired,
    answerContent: React.PropTypes.string.isRequired,
    answer: React.PropTypes.string.isRequired,
    onAnswerSelected: React.PropTypes.func.isRequired
  };

export default Answer;
