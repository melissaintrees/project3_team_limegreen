import React, { Component } from 'react';
import axios from 'axios';

// import  questions from '../mockdata/gameQuestions';


// Map function below goes loops over each video
const Question = (props) => {
return (
    <div className="question">
      <div className="question-text">
        <h3>{this.props.question}</h3>
      </div>
      <div className="question-code">
        <h3>{this.props.questioncode}</h3>
      </div>
      <picture className="question-image">
        <img src={this.props.questionimage} />
      </picture>
    </div>
  );
}

export default Question;