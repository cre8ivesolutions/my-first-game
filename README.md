# Milestone Project 1 
### My First Game: "Coding Quizzle"
### December 2022
This is my second attempt to create my first milestone game. 
###### - The week that the project was due my aunt passed away. I was responsible for her funeral and services. 

## About the game
- The entire game was made from scratch.
- I created the html file using Emmet Documentation.
- The game uses the live-server node package module (npm) to run locally in the browser.
- I linked the css file in the head of the html file.
- I linked the JavaScript file at the bottom of the html body.
- Near the end of the game, I needed help so I had help from one video by WebDevSimplified on YouTube. The video helped me with setting the answer buttons with the correct dataset if the chosen answer was correct. The vido can be found here: https://youtu.be/riDzcEQbX6k 
### JavaScript
I used JavaScript to program the game. 
- I created objects, arrays, arrays of object, new arrays from an object in an array, and more. 
- I also handled browser events, controlled flow, implemented loops and iteration, called functions, utilized arguments and parameters, set timeout, and more. 
- I also used at least one arrow function, used the forEach function, used the Increment Operator, used at least one promise, and more.
- I also accessed and updated the DOM to create elements and to add and remove classes.
### UX/UI
- I styled the game responsive to different screen sizes using flexbox. I also styled it mobile-first at 600 px wide. 
- I used the modern font-family 'system-ui' because it is a familiar font that is used on numerous Apple products.
- The css file is set up alphabetically and the more specific class and id styles are at the bottom. 
- I used one or two inline styles in the html file do demonstrate that I know how to use it.
- I used css @keyframes to create animations to create interest, the loading of the question, and to make the answer and next buttons responsive when hovering. 
- For the colors in the game, I used the website https://colorable.jxnblk.com/ to ensure that the contrast of the colors on the game pass the WCAG accessibility guidelines, which can be found at https://www.w3.org/TR/WCAG20/#visual-audio-contrast.

### What's good
- The biggest challenge was making the code DRY, and I believe I was able to achieve this. 
- The game colors are accessible.
- The game is responsive to different screen sizes.
- The start button displays the first question. 
- The next button increments the variable by one. 
- The score and total score divs are populating the correct numbers.
- The questions and answers array of objects is able to produce the correct text in the correct element.
- The answer buttons are able to add a point for the correct answer, and not add a point if the answer is incorrect. 
- The next question is able to be displayed correctly. 

### What is not so good
- If you click the correct answer more than one time, you will continue to get points added to your score for each click with no limit. I would like to continue to work on this usind setTimeout.
- All of the code was done in one file "questions.js" because I was not able to get the questions.js file or the constant representing the q and a array to import to a different file. 

## To start the game
1. Open your terminal and enter the command: git clone https://github.com/cre8ivesolutions/my-first-game.git
2. Cd into the folder you just created
3. Open the game in your default code editor by entering the command: code ..
4. Install the required node package modules. In the command line of your code editor, run the command: npm i
5. To open the game in your defualt browser, run the command: npm start



