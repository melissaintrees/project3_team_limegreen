import React, { Component } from 'react';
// import axios from 'axios';
import Answer from '../Answer';

// Map function below goes loops over each video
const Question = (props) => {
return (
      <div className="card card-sty">
          <div className="card-body">
              <h5 className="card-title qtxt">{props.question.question}</h5>
              <div className="button-grouping">
              { props.question.answerOptions.map( (a) => ( 
                        <Answer 
                          answerOptions={a}
                          questionIndex={props.questionIndex}
                          userCorrect={props.question.userAnswer === props.question.correctAnswer ? true : false }
                          userSelectionClick={props.userSelectionClick}
                        />
                    ))}
              </div>
          </div>
      </div>
  
  );
};

export default Question;