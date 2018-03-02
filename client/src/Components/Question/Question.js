import React, { Component } from 'react';
import axios from 'axios';
import Answer from '../Answer';

// import  questions from '../mockdata/gameQuestions';


// Map function below goes loops over each video
const Question = (props) => {
return (
    <div className="question">
      <div className="question-text">
        <h1>{props.question.question}</h1>
      </div>
      <div className="question-code">
        <h3>{props.question.questioncode}</h3>
      </div>
      <picture className="question-image">
        <img src={props.question.questionimage} />
      </picture>
      { props.question.answers.map( (a) => ( 
                        <Answer answers={a}/>
                    ))};
    </div>
  );
}

export default Question;