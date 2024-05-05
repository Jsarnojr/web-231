"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Joseph Sarno 
      Date: 05/05/2024   
      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90; // Updated quizTime to 90 seconds
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");
let questionList; // Declaring the node list for questions
let timeID; // Declaring the ID for timed commands

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Query and store the list of quiz questions' input elements
questionList = document.querySelectorAll("div#quiz input");

// Add onclick event handler to the startQuiz button
startQuiz.onclick = function() {
   // Show the quiz overlay and start the countdown
   overlay.className = "showquiz";
   timeID = setInterval(countdown, 1000); // Repeat countdown every 1 second
};

// Function to update the quiz clock and handle countdown logic
function countdown() {
   if (timeLeft === 0) {
      // Quiz time is up
      clearInterval(timeID); // Stop the countdown

      // Check answers and display results
      let totalCorrect = checkAnswers();

      if (totalCorrect === correctAnswers.length) {
         // All answers are correct
         alert("Congratulations! You got 100%!");
      } else {
         // Some answers are incorrect
         let incorrectCount = correctAnswers.length - totalCorrect;
         alert(`You have ${incorrectCount} incorrect answers out of ${correctAnswers.length} questions.`);
         timeLeft = quizTime; // Reset timeLeft
         quizClock.value = timeLeft;
         overlay.className = "hidequiz";
      }
   } else {
      // Update time left and display on the quiz clock
      timeLeft--;
      quizClock.value = timeLeft;
   }
}

// Function to check the student answers
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = ""; // Remove any wronganswer class
      } else {
         questionList[i].className = "wronganswer"; // Mark incorrect answers
      }      
   }
   
   return correctCount;
}
