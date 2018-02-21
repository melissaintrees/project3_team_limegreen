import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';
import Question from './Question';
import { questions } from '../mockdata/gameQuestions';


// 
class GameApp extends Component {


    handleAnswerClick(e) {
        const { questions, step, userAnswers } = this.state;
        const isCorrect = questions[0].answers[questions[0].correctAnswer - 1] === e.target.innerText;
        const answersFromUser = userAnswers.slice();
        const currentStep = step - 1;
        const tries = answersFromUser[currentStep].tries;
    
        if (isCorrect) {
    
          document.querySelector('.question:first-child').style.pointerEvents = 'none';
    
          e.target.classList.add('right');
    
          answersFromUser[currentStep] = {
            tries: tries + 1
          };
    
          this.setState({
            userAnswers: answersFromUser
          });

}



// Take component's generated HTML and put it in the DOM
ReactDOM.render(<GameApp />, document.querySelector('.container'));