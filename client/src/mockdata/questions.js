// import React from 'react';

export const cssCategory = {
    lessonVideo: "https://www.youtube.com/watch?v=NLZRYQMLDW4",
    questions: [
        {
            type: "multipleChoice",
            question: "What is CSS?",
            answers: ["It is a how text appears.", "Some random letters.", "It stands for Cool-Singing-Sheep.", "How we add style to a page."],
            correctAnswer: "How we add style to page."
        },
        {
            type: "multipleChoice",
            question: "Do we always have CSS on a page?",
            answers: ["No, it takes too long", "Yes, if we want there to be any styles to appear.", "No, we can use HTML to add style", "No, we don't need it to add styles to the page."],
            correctAnswer: "Yes, if we want there to be any styles to appear."
        },
        {
            type: "multipleChoice",
            question: "Can we use CSS to add color, images, animations, and different fonts?",
            answers: ["No, CSS can't be used to add images", "Yes! CSS can add all of those things!", "No, CSS can't be used to add animations", "No, CSS is only used to add color."],
            correctAnswer: "Yes! CSS can add all of those things!"
        },
        {
            type: "multipleChoice",
            question: "Where do we put our CSS file?",
            answers: ["In the same file as our HTML", "In the same folder as our HTML, but above.", "In the same folder as our HTML, but below.", "In a separate file, to keep everything organized"],
            correctAnswer: "In a separate file, to keep everything organized"
        },
        {
            type: "multipleChoice",
            question: "What CSS code would change the color of <h1>Hello World!</h1>?",
            answers: ["p{color: red}", "h4{colord: blue}", "ul{color: red}"],
            correctAnswer: "h1{color: red}"
        },
        // {
        //     type: "multipleChoice",
        //     question: "What code would change the background color of a page to green?",
        //     incorrectAnswers: ["color: green", "Change-Color: GREEN", "background-color: blue"],
        //     correctAnswer: "background-color: green"
        // },
        // {
        //     type: "multipleChoice",
        //     question: "What code would change the background color of a page to green?",
        //     incorrectAnswers: ["color: green", "Change-Color: GREEN", "background-color: blue"],
        //     correctAnswer: "background-color: green"
        // },
        // {
        //     type: "multipleChoice",
        //     question: "What code would make the font of the following code small: <p>Am I small?</p>?",
        //     incorrectAnswers: ["p{font-size: xx-small}", "p{font-size: x-small}", "p{font-size: xxx-small}"],
        //     correctAnswer: "p{font-size: small}"
        // },
        // {
        //     type: "multipleChoice",
        //     question: "What code would create an outline for this code: <h4>How did you make my outline?</h4>?",
        //     incorrectAnswers: ["h3{outline-color: red}", "h4{outline-color: red}", "h4{outline-color: orange}", "h4{color: red}"],
        //     correctAnswer: "h4{outline-color: orange}"
        // },
        // {
        //     type: "multipleChoice",
        //     question: "CSS can be used to add styles to lists. <or> means this is an ordered list, it will always show the animals in this order. <ul> means that the order of the list does not matter. What code would style the following list code: <ul class='animal'><li>Wallaby</li><li>Giraffe</li><li>Elephant</li><li>Lion</li></ul>?",
        //     incorrectAnswers: ["animal {list-style-type: square}", "animal {list-style-type: circle}", "animal {list-style-type: lower alpha}"],
        //     correctAnswer: "animal {list-style-type: circle}"
        // },
    ]
};

export default cssCategory;
