import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';
import Question from './Question';
import { questions } from '../mockdata/gameQuestions';


// 
class GameApp extends Component {

}



// Take component's generated HTML and put it in the DOM
ReactDOM.render(<Game />, document.querySelector('.container'));