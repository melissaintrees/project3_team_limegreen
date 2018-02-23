import React, { Component } from 'react';
import axios from 'axios';
import  questions from '../mockdata/gameQuestions';


// Map function below goes loops over each video
const Question = (props) => 
   <div>
      {/* <video>
        <source src={props.lessonVideo} />
        </video> */}
        <ol>
          <h2 className="question-title">
          {props.value}
            {/* {questions.question} */}
          </h2>
        </ol>
    </div>

export default Question;