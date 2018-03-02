import React from 'react';

//answer extend component and pass in props

// import PropTypes from 'prop-types';
import cssCategory from '../../mockdata/questions';

// Answer component for quiz. Creates radio button selection.
const Answer = props => {
    <ul className="answerOption">
            <input
            type="radio"
            className="radioCustomButton"
            name="radioGroup"
            // onClick={handleAnswerClick}
            >
            {this.props.answers}
            </input>
        <label className="radioCustom">
        {/* {answers} */}
      </label>
    </ul>;
};

export default Answer;
