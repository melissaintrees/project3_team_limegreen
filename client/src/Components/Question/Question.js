import React from 'react';
// import axios from 'axios';
import Answer from '../Answer';

// Map function below goes loops over each video
const Question = (props, userSelectionClick) => {
return (

<div class="row">
  <div class="col-0 col-lg-3"></div>
    <div class="col-12 col-lg-6">        
          <div class="card card-sty">
              <div class="card-body">
                    <h5 class="card-title qtxt">{props.question.question}</h5>
                    <h5 class="card-title qtxt">{props.question.questioncode}</h5>
                  <picture className="question-image">
                    <img src={props.question.questionimage} />
                  </picture>
                  <div class="button-grouping">
                  { props.question.answers.map( (a) => ( 
                        <Answer answers={a}/>
                    ))};
                    </div>
              </div>
          </div>
      </div>
  <div class="col-0 col-lg-3"></div>
</div>
)};

export default Question;