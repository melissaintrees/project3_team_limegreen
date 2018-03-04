import React from 'react';
import Question from './Question';

const QuestionList = ({ props, userSelectionClick }) => {
  return (
    <div className="question-list">
      {questions.map(question => {
        return (
          <Question
            key={cssCategory.questions.question.props.children.toString()}
            question={cssCategory.questions.question}
            answers={cssCategory.questions.answers}
            userSelectionClick={userSelectionClick}
          />
        );
      })}
    </div>
  );
}

export default QuestionList;