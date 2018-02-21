import React from 'react';

const QuestionList = ({ questions, handleAnswerClick }) => {
    return (
      <div className="question-list">
        {questions.map((question, idx) => {
          return (
            <Question
              key={idx}
              question={questions.question}
              answers={question.answers}
              handleAnswerClick={handleAnswerClick}
            />
          );
        })}
      </div>
    );
  }

export default QuestionList;