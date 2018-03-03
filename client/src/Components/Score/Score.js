// import React from 'react';

// const calculateScore = arr => {
//     return arr.map(item => {
//       return item.attempt;
//     }).reduce((acc, item) => {
//       acc[item] = (acc[item] || 0) + 1;
//       return acc;
//     }, {});
//   };

// const Results = ({ userAnswers, score }) => {
//   const attemptTotal = calculateScore(userAnswers);
//   const firstAttempt = attemptTotal[1] && <div><strong>{attemptTotal[1]}</strong> on the first try.</div>;
//   const secondAttempt = attemptTotal[2] && <div><strong>{attemptTotal[2]}</strong> on the second try.</div>;
//   const thirdAttempt = attemptTotal[3] && <div><strong>{attemptTotal[3]}</strong> on the third try.</div>;
//   const fourthAttempt = attemptTotal[4] && <div><strong>{attemptTotal[4]}</strong> on the fourth try.</div>;
//   return (
//     <div className="results-container">
//       <h2>Quiz Results</h2>
//       <div>You answered...</div>
//       {firstAttempt}
//       {secondAttempt}
//       {thirdAttempt}
//       {fourthAttempt}
//       <div className="results-total">Your Total Score is <strong>{score}</strong>.</div>
//     </div>
//   );
// }

// export default Results;