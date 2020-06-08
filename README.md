# Homework Week 4

This project is a working password generator that selects a psuedo-random password based on the input criteria of the user.

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

The following animation demonstrates the application functionality:

## Steps

Using Javascript and the skills from class, I used arrays, If functions and loops, and Math.Random formulas to generate the characters required.

Using confirm prompts, I allowed the user to select what customisation they can add to their password. The basic password are random lower case letters. Based on the criteria the user selects, each character has a certian % chance of becoming a symbol/ capital or number.

At the end, if the user wanted a phrase, I utilised a replace function in order to replace the existing characters of the password with the phrase input by the user. I used the phrase length and the password length to ensure that the phrase would always fit within the password.

Made some adjustments and used checks and loops so that all the paramters listed by the user would appear in the password.

Also created a quick check button for users who don't need a custom password.

## Deployment

The repository can be found here: https://github.com/chages16/PasswordGenerator

The website, can be found here: https://chages16.github.io/PasswordGenerator/

## Built With

* [Visual Studio Code](https://code.visualstudio.com/)

## Versioning

1.1.0 

## Authors

* **Chris Hage** - *Password Generator* - [Chages16](https://github.com/chages16/)

## Acknowledgments

* Bootstrap
* Uni SA Coding Bootcamp
