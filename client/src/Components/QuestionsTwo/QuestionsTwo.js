import React from "react";
import "./QuestionsTwo.css";
import cssCategory from '../../mockdata/questions'

const QuestionsTwo = props => (
    
    <div class="card card-sty">
        <div class="card-body">
            <h5 class="card-title qtxt">{cssCategory.questions[0].question}</h5>
            <div class="button-grouping">
                <a href="#" class="btn btn-answer1 text-center">{cssCategory.questions[0].answers[0]}</a>
                <a href="#" class="btn btn-answer2 text-center">{cssCategory.questions[0].answers[1]}</a>
                <a href="#" class="btn btn-answer3 text-center">{cssCategory.questions[0].answers[2]}</a>
                <a href="#" class="btn btn-answer4 text-center">{cssCategory.questions[0].answers[3]}</a>
            </div>
        </div>
    </div>

);

export default QuestionsTwo;