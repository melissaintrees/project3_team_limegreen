import React, { Component } from 'react';
// import axios from 'axios';
import Answer from '../Answer';

// Map function below goes loops over each video
const Question = (props) => {
return (
  <div class="card card-sty">
        <div class="card-body">
            <h5 class="card-title qtxt">{props.question.question}</h5>
                  <div class="button-grouping">
                  { props.question.answerOptions.map( (a) => ( 
                        <Answer 
                          answerOptions={a}
                          questionIndex={props.questionIndex}
                          userSelectionClick={props.userSelectionClick}
                        />
                    ))}
              </div>
          </div>
      </div>
)};

export default Question;