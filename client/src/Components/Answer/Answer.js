import React from 'react';
// import PropTypes from 'prop-types';
import cssCategory from '../../mockdata/questions';

// Answer component for quiz. Creates radio button selection.
const Answer = (answers) =>
    <ol className="answerOption">
            <input
            type="radio"
            className="radioCustomButton"
            name="radioGroup"
            // onClick={handleAnswerClick}
            >
            {answers}
            </input>
        <label className="radioCustom">
        {/* {answers} */}
      </label>
    </ol>;

export default Answer;
