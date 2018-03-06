// import React from 'react';

export const htmlCategory = {
    lessonVideo: "https://www.youtube.com/watch?v=NLZRYQMLDW4",
    questions: [
        {
            type: "multipleChoice",
            question: "What do we use HTML for?",
            answerOptions: ["Adding colors", "Adding text", "Adding images", "All of these things!"],
            correctAnswer: "All of these things!"
        },
        {
            type: "multipleChoice",
            question: "What do we need for all of the content we put on a page?",
            answerOptions:["Color!", "Pictures!",  "Tags!", "Text!"],
            correctAnswer:"Tags!"
        },
        {
            type: "multipleChoice",
            question: "Where do we put HTML elements we want to appear on the page?",
            answerOptions: ["Between the <script> tags", "About the <header> tag",  "Between the <body> tags", "After the <title> tags"],
            correctAnswer: "Between the <body> tags"
        },
        {
            type: "multipleChoice",
            question: "What does every tag need for it to work?",
            answerOptions:["A closing tag", "CSS", "An image", "A button"],
            correctAnswer: "A closing tag"
        },
        {
            type: "multipleChoice",
            question: "What do we call what we put between two tags?",
            answerOptions: ["Stuff", "Content", "Gibberish", "Text"],
            correctAnswer: "Content"
        },
        {
            type: "multipleChoice",
            question: "Can we use HTML to add an image?",
            answerOptions: ["No, we have to use CSS.", "No, we can't add images.", "No.", "Yes! We can use a <img> tag."],
            correctAnswer: "Yes! We can use a <img> tag."
        },
        {
            type: "multipleChoice",
            question: "Can we add links using HTML?",
            answerOptions: ["Yes! We can use an <a href> tag to add a link.", "No, we can't add links when we code.", "Yes! We can use a <h1> tag.", "No, we have to use a loop to add a link."],
            correctAnswer: "Yes! We can use an <a href> tag to add a link."
        },
        {
            type: "multipleChoice",
            question: "Can we add a button with HTML?",
            answerOptions: ["No, we have to use CSS", "Yes, we can use a <h1>Button</h1>.", "Yes, we can use a <p></p> tag and make it a button with CSS.", "Yes! We can use a <button></button> tag to create a button."],
            correctAnswer:  "Yes! We can use a <button></button> tag to create a button."
        },
        {
            type: "multipleChoice",
            question: "Will the text in an <h1> tag be smaller then the text in an <h6> tag?",
            answerOptions: ["Yes, 1 is less than 6.", "No, h1 text is larger.", "Maybe?", "Yes, <h1> has the smallest text."],
            correctAnswer: "No, h1 text is larger."
        },
        {
            type: "multipleChoice",
            question: "Can we make lists using HTML?",
            answerOptions: ["No, we have to use CSS for lists.", "No, we can't make lists with HTML.", "Yes, we can use <ul>, <ol>, and <li> tags to make a list with HTML.", "No, we don't want to make a list."],
            correctAnswer: "Yes, we can use <ul>, <ol>, and <li> tags to make a list with HTML."
        }
    ]
};

export default htmlCategory;