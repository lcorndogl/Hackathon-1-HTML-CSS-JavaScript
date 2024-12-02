## Contents

## Proposal

We will create a text-phrase guessing game. The game will present an common, idiomatic phrase, and the user will guess vowels and consonants, or attempt to guess the phrase as a whole. Guesses will be tracked, and a score calculated at depending on how many letters were guessed before the correct answer was arrived at.

## AI Integration

As a useful tool for sampling a zeitgeist of English text, ai was helpful for presenting uncommon and common idiomatic phrases.
Ai was also used to assist with generating user stories, the content generated was hand edited for suitability.

## User Experience

### User Stories

As a user I want to be able to generate questions that show up on screen, and guess what the answer is - wheel of fortune style

As a user I want to be able to see which letters I have already guessed.

As a used I want to my current score and previous scores, along with the best score achieved.

As a user I want to be able to play the game on any device.

### Wireframing

![wireframe](docs/image_2024-11-27_123117416.png)

We decided on this design based on the colours of other market-leading text games (Wordle, NYTimes and Sudoku.com).
Alternate looks were also proposed as refinements

![Wireframe2](docs/image_2024-11-27_141343866_480.png)
![Wireframe3](docs/new_phone_480.png)

Demonstrations of the scalability of the site to larger devices are wireframed below

![Wireframe4](docs/image_2024-11-27_142015802_720.png)

## Coding with AI

This if test was one entirely derived by ai, along with the plan arrived at to refine the first solution we arrived at

![Ai_code_plan](docs/Promptexample.png)

## Future Features

### Implemented

High score tracking

Letters guessed colour coding - green for correct and red for incorrect

### To Implement

Add in a spinning wheel that has various sections to multiply the score for the next attempt/give random letters etc.

Adjust letters used to be an available letters - with black letters being unused, green being correct and red being incorrect.

A timer could be added to the game for a more configurable challenge. This could also be tracked across users, and used to generate leaderboards based on fastest times and highest scores.

Use of cookies to makes scores persistent across sessions, or use of a backend server to allow users to create accounts, allowing them to track their scores across multiple sessions and devices.

Other features could include social media integration, and the use of APIs to post scores to social media platforms automatically.

Graphing methods for scores over time could also be investigated and implemented.

## Design

Abdulmajeed

## Features




## Deployment

1) Add the required files to the git repository with the command `git add .`
2) Commit the changes to the repository with the command commit command `git commit -m "Final project commit"`
3) Open up the repository and go to the settings > pages menu ([Project Settings > Pages link](https://github.com/lcorndogl/Hackathon1-Wheel-of-Fortune/settings/pages))
4) Select the root directory and main branch to deploy the project ![Deploy Settings for Project](docs/github-deploy-settings.png "GitHub Pages Deployment Settings")
5) Verify that the project has been deployed by going to the main repository page (Code) and checking the deployment status on the right hand side
[Link to Deployed Site](https://lcorndogl.github.io/Hackathon1-Wheel-of-Fortune/)
![Deployed Project Check](docs/github-deployed.png "GitHub Pages Deployment Check")

## Bugs

### Resolved

Low Contrast Header - Added text shadow around for contrast.

Low Contrast Cheat Button - Added text shadow around for contrast.

Skipped heading - Set to h1 and used the class of the relevant heading for formatting.

Casting the lower or upper case to the method that passed red or green classes to the DOM behaved incorrectly colouring a correct guess red when it's case differed. - Casted to lowerCase with toLowerCase for checks in line with the rest of the code.

### Unresolved

All known bugs are resolved

## Technologies Used

### HTML

Basic HTML was used to create the various areas of the page

### CSS

### JavaScript

### Git

Git was used for the versioning of the project. We also utilised the branch feature to prevent working on the main branch, and merging into it regularly to ensure the central code was up to date between all of us.

### GitHub

GitHub has been used as a repository for the code allowing all team members the one version of the truth with the main branch - as this was locked down to prevent working on main as well.

GitHub was also used for the deployment of the website, allowing it to be accessed from anywhere with an internet connection.

### Visual Studio Code

Visual Studio Code has been used to create the project, allowing for the use of emmet commands as well as CoPilot integration to provide feedback on code snippets and suggestions whilst writing code.

### CoPilot

CoPilot has been used for code suggestions, as well as troubleshooting logic occasionally when a statement or loop isn't working as expected in the code.

### bash terminal

Bash terminal was used for adding and commiting files, as well as swapping between branches, merging between branches and easy structure/

### nano

## Testing

### Troubleshooting

![Wireframe](docs/bugs/CssAifile2.png)

The above demonstrates Copilot missing a linked asset, and taking it's best guess at the filepath for the local CSS. This is a persistent issue with ai-generated links as demonstrated below.

![Wireframe](docs/bugs/JsAifile1.png)

### Responsivity Images

### Validation



### Lighthouse Scores

## Credits

[Stack Overflow - How to form an array of question/answer pairs](https://stackoverflow.com/questions/37252041/storing-quiz-questions-in-array-of-objects)

[MDN Docs - Letter spacing code snippet to ensure there is space between letters without HTML stripping out multiple space character whitespaces](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)

[Cloud Convert - Image manipulation](https://cloudconvert.com/png-to-webp "Convert image filesize and format to webp")

Considerations from the WAVE validation:
form unlabelled -
The form is unlabelled by design, as it is hidden from the user.

Low-contrast header -
The header text is defined by text-shadow, the colour is identical to the background by design.

Low-contrast cheat button -
The error is caused by the similarity of the default and hover appearances and can be disregarded. Added a 1px border to the cheat button.

Skipped heading level:
By design, if we want to insert headings between in future.

Possible heading:
This refers to the game area, and wasn't styled as a heading.

Considerations from JS validation:
All of the warnings returned related to versioning, specifically with LET and CONST.

The HTML and CSS validated without error.



Design - We selected a black and white simplistic theme, to resemble the simplicity of the game we were creating. The title in the navbar was a real struggle, looking at the wireframes, we planned for the title to be at the centre of the page but unfortunatly we was not able implement that so we had to innovate with what we had been given and we used AI to add an hover effect to the title only revealing the title when it is hovered over but when off it stays transparent to remove the sense of the title not being in the correct place.  The border sizes was done using AI to save time from trial and error. All buttons was styled to be unique since each one serves its own function and 1 is not related to the other. Font sizes we decided on when planning our project, we was on the look out for more simple retro game style fonts to match the theme.
Features - Gameplay
Future Features - Mostly implemented (as a stretch goal, ie: colours)
-- Score Persistence
-- Some responsiveness tidy up

Technologies User - Copy pasta

Deployment - Deployment Section

Testing
--validation
--lighthouse
-- console logs as building to ensure triggers (now removed as tidy up exercise)


Credits - Exists
