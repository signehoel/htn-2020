# Math Hacks

Math Hacks: Hack the North 2020 Project Submission 
Authors: Lauren Yoshida, Signe Hoel, Hargun Bhalla 

Inspiration:
As stem students, we were always looking for resources that make our lives easier and more efficient. Fortunately, there are tons of resources online - almost too many. We found that we had tens of tabs open to do a simple math assignment, making our lives more cluttered than it needed to be. In fact, that wasn’t the only problem, students find themselves switching between tabs missing little details causing them more work. It was then that we thought that having a tool that consolidated all of these online math platforms into one would prove useful for not only us but other students who look to make their lives more efficient. (edit)

What it does:
MathHacks is a chrome extension that allows you to solve math expressions efficiently and effectively at a drop of a hat. It can calculate anything from numerical calculations to symbolic math parsing. 

By activating the extension, we have access to four different sections:
- Calculus 
- Functions
- Matrix Algebra/Vectors
- About

The first three sections represent various areas in math, each with their respective operations that can be applied to an inputted expression. The about section provides a guide to how to correctly format the expressions depending on the chosen operation in order to get a correct response. 
Both the calculus and functions sections have many commands that are common for students to see on assignments/homework, such as ‘derive’, ‘integrate’, ‘simplify’, ‘factor’, ‘find 0s’, etc. Unfortunately, due to this being the first time making a chrome extension for all of us, we were unable to complete the matrix algebra/vectors section.

How I built it:
In retrospect, the process of making a chrome extension was relatively simple. However, since the process was new to all of us and we were all unfamiliar with Javascript, it was a great learning experience. First, we used HTML, CSS, and Javascript to create a generic popup that would appear whenever you would activate the plugin. We used bootstrap to make an aesthetically pleasing and simple UI, saving us time on the design side. 

Next, we searched for APIs that performed the operations that we were looking for. We ended up finding one called the NewtonMath API, which was open-source on github with instructions on how to integrate it into our project. After some time, we managed to get our program to send a GET request through the API and store the result in a variable for use. We then had to allow for user input, which we did through a dropdown menu (for the chosen operation) and an input form (for the expression). Then, we connected everything to make a dynamic program that accepted input and prints out a result every time that the “calculate” button is pressed. 

Challenges I ran into:
Like every hackathon, we ran into challenges throughout the weekend. We ran into our first problem as it was our first time using this type of API so there was a lot of learning. This caused us to constantly have errors in our code which meant debugging. Which left us debugging our code for hours which was not ideally especially online. If we had been in person, we probably would’ve been more productive and allow us to help debug our code. Otherwise we ran into technical problems including using javascript and implementing Bootstrap. At the end of this hackathon, our team had the opportunity to create a versatile solution to a complex problem, by combining our skills, experiences, and knowledge sets. 
- First time using this type of api
- Debugging took a long time
- Communication was tough online
- Javascript 
- Bootstrap issues

Accomplishments that I’m proud of:
Honestly, to our surprise there is no current chrome extension that does exactly what MathHacks does. Yes, there are many other mobile apps that do similar things like Photomath for example or websites like Symbolab but the flaw lies when you are required to have another device or switch tabs. MathHacks makes the entire process more user friendly. Otherwise, our team ran into multiple roadblocks creating this chrome extension and often felt like the problems were impossible to fix. That aside we are proud of MathHacks and everything we learned over the weekend!

What I learned?
Coming into the hackathon our team had a very limited understanding of how chrome extensions work and how to use APIs alongside with next to no experience with javascript and bootstrap. Over the course of the weekend, our team was able to improve our understanding of javascript, APIs, chrome extensions and bootstrap. We also were able to have some fun and learn how to work better in the pandemic.

What’s next for MathHacks?
We have had so much fun developing this chrome extension so we are looking to continue with the development of the MathHacks to improve the user experience, including more math functions. We plan to build out the Matrix Algebra/Vectors section which would include more calculator functions related to linear algebra. That aside we’d like the calculator to help our users so adding different functions that will help them and others in the future :) 
