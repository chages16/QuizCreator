# Homework Week 4

This project is a working short quiz that uses Javascript to create multiple choice questions for the user, as well as store high scores input.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

## Steps

Using Javascript and the skills from class, I used arrays, If functions and loops, and APIs to create the game.

Using bootstrap and some jquery for the header, I tried to create a template that would fit on 1 page. Using media query I made some adjustments so that it would be usable on most media platforms.

The first steps were creating functions that would allow multiple choice buttons a-d appear. Usine a data-index field and an answers array, I was able to create a simple function that looked up the answer to the question based on what question the user was up to. Once the questions were all answers, or once the time was up, the timerinterval would end and the user would be prompted to enter in their intitials. The function then stores the initials, questions answered, and the total score (questions answered plus time left), as three different variables within the browser local storage.

In order to generate it back within the html, I created a for loop that creates an array which lists the index number of the scores from highest to lowest. Another for loop then selects the information of all 3 stored variables and inserts them into a table in that order, allowing top scores to appear at the top of the screen.

Once this was completed, I generated the questions within an array and used Javascript html elements to to place the text in the main section of the screen.

A reset function was created so that all high scores can be deleted, as well as a function that runs whenever the page is loaded that checks for any existing local storage.

Ran the functions a few times to ensure it met all acceptance criteria.

## Issues/ Bugs/ Next Steps

Currently while the css has been updated so that everything is viewable on mobile/ smaller displays, I haven't been able to get it to run on Chrome for mobile. It works and meets all the acceptance criteria on the Internet browser on my phone. I have not been able to fix this yet.

Would like to simplify the JS code with Jquery. The document does use JQuery for some of the Bootstrap elements, but I don't use it within my script.

I found issues using objects to store the initials, questions answered and scores of the users. I'd like to update the code in the future to use objects rather than arrays so that I can reduce the variables required and perhaps simplify the function that sorts the data by highscore.

When I have more time, I'd like to improve the CSS and text to make it look a bit more appealing!

## Deployment

The repository can be found here: https://github.com/chages16/QuizCreator

The website, can be found here: https://chages16.github.io/QuizCreator/

## Built With

* [Visual Studio Code](https://code.visualstudio.com/)
* [Bootstrap](https://getbootstrap.com/)
* [J Query](https://jquery.com/)

## Versioning

1.0.0 

## Authors

* **Chris Hage** - *Quiz Creator* - [Chages16](https://github.com/chages16/)

## Acknowledgments

* Bootstrap
* Uni SA Coding Bootcamp
