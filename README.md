![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

<h1 align="center">Interactive Frontend Milestone 2 Project 
<h2 align="center">Automate your Golfing experience :robot: :golf: </h2>


Here is the deployed version on the site : 
**[Golf Score App](https://marks530.github.io/ms2-project-resubmit/)**

# **Table of Contents**

- [**Project Introduction**](#project-introduction)
- [**Project Goals**](#project-goals)
- [**User Goals**](#user-goals)
- [**User Stories**](#user-stories)
- [**Site Owner Goals**](#site-owner-goals)
- [**UX**](#ux)
- [**Design Choices**](#design-choices)
- [**Wireframes**](#wireframes)
- [**Features**](#features)
	- [Features left to implement](#features-left-to-implement)       
- [**Technologies Used**](#technologies-used)
- [**Testing**](#testing)	
- [**Bugs**](#bugs)
- [**Deployment**](#deployment)
- [**Credits**](#credits)
	- [Content](#content)
	- [Acknowledgements](#acknowledgements)
- [**Footnote**](#footnote)
    
## Project Introduction

Golf is played in Ireland by over 180,000 people. This is the number of registered players who are members of golf clubs. It is also played by a huge number of people who are not members of clubs and who play golf regularly. They are very often members of golf societies. Golf societies are groups of amateur/casual golfers that have been formed to enable the society members to be involved in golf tournaments without being actual members of a golf club. Usually societies are formed in a workplace or a social gathering point such as a sports club or a pub.Golf club have only recently(in the last 5 years) updated their IT systems to allow scores and golf handicaps to be collected digitally. This is a great benefit to clubs members. They can look up their scores from all of the tournaments included in the system. This service is provided by a company called [Howdidido](https://www.howdidido.com/Account/Login?returnUrl=%2f) and is so successful is hard to imagine ever being without it. This project is about replicating that service for the casual golfer. 

## Project Goals

The goal of the project is to provide a web based application to groups of casual golfers. The application will offer a means of collecting the scores of golf players who have just finished playing a round of golf and wish to submit their scores to calculate the winner of a competition. The player will enter their score (in golf strokes) for each golf hole and be given a total of the strokes for the round.
As this is a project to be completed for a Milestone Project for the Code Institute the goal is to create an interactive website demonstrating this skills learn in the second phase of the course.
The project was created using HTML CSS and JavaScript and is ready for further development. I would like very much to develop the project using the new skills that I will learn in the next stages of the course such as adding a database to store user statistics. This can be done back-end applications and using the Python language.

## User Goals

The user of the site will be initially be the organizer of the event usually the captain of the golf society. The captain will set up the event and he will then instruct the competitors to log in with their names and be taken to the score entry page.
This method of collecting scores will give the organizer a immediate update on the players scores and information on who is leading the competition. The player who is entering his score will get a total of the number of strokes and a verification that his score has been entered on the system.
The player can also view the leaderboard and see how they have fared in the competition.

## User Stories

The user/player is introduced to the site by the event organizer.
When the user connects to the website he/she is presented with event information. The home page contains images of the course they are playing and details of the days timetable.

When the player has finished their round they connect to the site and click in the "Score Entry" button.
They are presented with a score card in the form of a table showing the the golf hole number, the golf hole index (which is the degree of difficulty of the each hole 1 being the most difficult) and the empty score area. The table also shows the par value for each of the golf holes which is the expected score for each hole. The par 3 holes are usually the shortest usually reachable in one shot, the 
par 4 holes are longer and reachable in 2 shots and the par 5 holes are the longest reachable in 3 shots. 
Above the score card the user will find the score entry area with a header showing a hole number, an increment and decrement buttons and the score entry box.

When the player has finished playing their golf round they connect to the site and click in the "Score Entry" button.
The Score Entry process is as follows

* the user signs in to the event using their full Name
* the name is validated for alpha characters only and is capitalized for clarity
* if the name is the in the correct format ie first name and last name a valid entry message is shown
* if the name is not the correct format a message to reenter a valid name appears
* when the user clicks to clear the valid entry message their name is entered at the top of the score card
* the user then moves to the score entry area to enter their score
* the score entry area has three buttons, score increment, score decrement and score submit
* there is also a header showing which hole number is being entered
* the score entry area also has a score box which is automatically filled with the par value of the given Hole
* this par value is taken from the score card and is updated for each hole as the golfer steps through the score card
* the user enters the score for each hole by incrementing or decrementing from the par and clicks the submit button
* when the user clicks the submit button for the first hole the score for that hole is entered in the score card below the score area
* then the hole number is incremented automatically and the par value for that hole is presented in the answer box
* the user enters the score for nine holes and is congratulated and given a message showing the total numbers of strokes
* the total is entered at the total row on the score card along with the scores for each hole
* the user is is invited to the leaderboard page to view the scores recorded so far.

The score entry area is programmed the present the golf holes starting at hole 1 and ending at hole 9 (18 holes will introduced as the app evolves)and the score entry box will already contain the par value for the given hole and that will be the default score for each hole. 
This application will reduce the onerous task of collating all the scores for all the players and the organizer. At the moment the application is limited in its scope and will be developed as the Full Stack course progress.
The user enters their name and hits the "Click to enter Score button" and the name is entered above the score card. They then proceed to enter their score by using the increment/decrement buttons and clicking the submit button when the score is correct. So all the scores are entered with clicks of the mouse.

The answer box or score box automatically picks up the par value for each hole and enters it in the score box. Each time the submit button is clicked for a hole the score is added to hole row on the score card. At hole 9 the user is presented with an alert and a congratulations message, their name and their total number of strokes or score. 
The players name and score are added to the leaderboard on a separate page using the web storage feature of the browser. Each player can see their position on the leaderboard.

## Site Owner Goals

The site owner is getting a web application which has copied a typical score entry system used in golf clubs and is making it available to casual golfers and golf society members.  In the club environment this service is provided by Howdiddo.com and it works so well it is in constant use. 
Scores for each golf tournament are stored and available to the user at any time. The site owner is offering an effective professional service to the casual golfer. Golfers casual or club members are hugely interested in their statistics, the score achieved,the number of points scored each round , reducing their handicap, and so on.
All of which means that golfers players/users(the terms are all interchangeable here) are all regularly referring to the database of their statistics and thereby looking up information from the website. 
The service is intended to be free to use with sign up and log in required. 
In the professional environment the user is presented with stream of advertising for all sorts of golf products and services. This provides the site owner will regular users who can be exposed to relevant advertising.

## UX

The home page is designed to be a relatively simple page with a Navigation bar, a hero image of the golf course and banner message with information on the event. 

This is followed by a carousel allowing the site to show the user multiple images of the golf course. The footer will contain useful contact information.
This page serves as an introduction to the event as all the users will already be familiar with.
The most important element on the page is the "Score Entry" button which is a link that takes the user to the score entry page.
On the Score Entry page the user is prompted to enter their first and last name
I have added name validation functionality to check the name input for alpha characters and a first name and last name.
For clarity I decided to capitalize the name input and followed that though to the scorecard header and the leaderboard entries
The function uses Regular Expressions to check the input.

```
function validate() {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementById('name').value;
    if (!regName.test(name)) {
        alert('Please enter your full name (first & last name).');
        document.getElementById('name').focus();
        return false;
    } else {
        alert('Valid name given.');
        document.getElementById("player-name").innerHTML = getInputValue();
        return true;
    }
}

```
The validated name is then entered at the top of the scorecard and the user proceeds to sequentially enter their score for each hole.
The layout of the page is based on the score entry system used by HowdidIdo.com used by golf clubs and the Maths game used in the Code Institute course on Javascript demonstrated by Matt Rudge.
This combination seemed to fit perfectly the requirements for the purpose.
The answer box or score box fetches the par value from the scorecard for the hole and the users clicks
the increment/decrement buttons around the par value to get their score quickly.
The Submit button takes the entry and saves it to the scorecard.
When the limit of nine holes the congratulations message appears with the score total and the user is invited to see their entry on the leaderboard page.

## Design Choice     

The site layout contains a navigation bar, a banner image, a welcome message and event details section, a carousel with multiple images of the golf course, an information section and a footer.
I have improved a number of areas of the site by adding a background image which is an image taken from the golf course and changing the jumbotrons to containers with the effect of removing the background colour and presenting the headers and section titles directly on the background image.
This layout can be developed to suit many different courses throughout the country and indeed abroad
In the center of the page is the "Score Entry" button which is the call to action for the page. This takes the user to the score entry page. 

This page contains the business area of the site. The layout directs the user to log in and enter their score via the score entry area to appear in the score card table. The structure and layout of the score entry area is based on the Maths game used in the JavaScript course. The increment and decrement were a perfect fit for the score entry structure. The JavaScript content takes some elements from the game but is largely modified. Extra functions to get the players name, fetch the par values and present them in the score entry box, log the scores in the score card, total the numbers of strokes and add the total score to the score card 
The leaderboard page contains a table with a column for the players names and a column for the total scores for each individual. The structure is based on the local storage property that allows access to a storage object saved across browser sessions. This accessed by functions created in both the JavaScript files on the site. The site is configured for a maximum of 9 players but can easily be extended

 
## Wireframes

I have in included three desktop wireframes, one for iphone and one for ipad
Desktop Wireframes:

[Index Page Desktop Wireframe](https://marks530.github.io/ms2-project-resubmit/wireframes/index_desktop_wireframe.png)

[Score Entry Desktop Wireframe](https://marks530.github.io/ms2-project-resubmit/wireframes/score_entry_desktop_wireframe.png)

[Leaderboard Desktop Wireframe](https://marks530.github.io/ms2-project-resubmit/wireframes/leaderboard_desktop_wireframe.png)

iPad Wireframe:
[iPad Index Page Wireframe](https://marks530.github.io/ms2-project-resubmit/wireframes/ipad_index_desktop_wireframe.png)

iPhone Wireframe:
[Wireframe Score Entry](https://marks530.github.io/ms2-project-resubmit/wireframes/score_entry_iphone.png)

## Features

The site is made up of three html pages supported by a css file and two javascript files. The home page has no interactive features with the exception of a link button. The score entry page gather the players name and their score and the leaderboard page stores the player name and the total score.
The main features of the site are the interactive score card and leaderboard which allow the user view playing statistics and those of fellow competitors.
A carousel on the home page can show a range of images of a given course. Many more images can easily be added.
The site uses the browsers Window.localStorage Web API to store the player and the scores data

```
The localStorage properties allow to save key/value pairs in a web browser. The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year. The localStorage property is read-only.

```
During testing it was necessary to clear the local storage and this done in the dev tools of the browser. Select Applications in Dev Tools and right-click on the highlighted area in Storage.

[Dev Tools clear Local Storage](https://marks530.github.io/ms2-project-resubmit/images/local_storage.jpeg)

**Code Snippet Example - Local Storage**

```javascript

function saveScores() {
    let scores = localStorage.getItem(LOCAL_STORAGE_GAME_SCORES);
    if (!scores)
        scores = JSON.stringify({}); //JSON.stringify convert Javascript objet to a JSON object
    let scoresObject = JSON.parse(scores); //JSON.parse convert JSON objet to a Javascript object
    let name = document.getElementById('name').value;
    scoresObject[name] = getArrayTotal();
    localStorage.setItem(LOCAL_STORAGE_GAME_SCORES, JSON.stringify(scoresObject))
}

```

#### Features Left to Implement 

As the project was implemented using only front-end interactive technologies there is plenty of scope for development by employing backend services. The app was setup with 9 holes and a limit of 9 players. It would be very easy to extend this. But the first task was to get the app to work and then to extend later. I will look at improving the user experience by experimenting with different layouts and use of buttons.

* I would like to have the score entry and the buttons hidden until the name had been entered but I will implement this at a later date. It is still possible to enter a score without entering a player name.

* Another feature I would like to implement is to have leaderboard change with each new entry and list the players according to their scores.

In order to keep the user coming back to the site records of each event and associated statistics could be made available. The user could look up every time a round of golf was played and the individual scores at the time. Using the historical data a host of other useful statistics can be calculated. The user can measure their performance over time. As with similar sites relevant advertisements can be displayed to the user and an e-commerce utility could be added to the site.Using the landing page with its carousel and banner image it is possible to show multiple images of a given course and it would be a feature that could be extended over time. Templates could be set up for any number of different courses

## Technologies Used

 -   [HTML5](https://www.w3schools.com/html/)
 -   [CSS](https://www.w3schools.com/css/default.asp)
 -   [Javascript](https://www.javascript.com/)
 -   [Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)


## Testing

Completed testing of all the html code at the following address

 -  [W3 Validator](https://validator.w3.org/nu/#textarea) 

 and the css.style file using the css checkbox on the same page 
 The results of the first validation checks are shown below
 The result from the index.html page

[Index validation check](https://marks530.github.io/ms2-project-resubmit/images/index.html_validation_check.jpeg)

 All the problems and warning were investigated and resolved as shown in the image below.

[index pass validation](https://marks530.github.io/ms2-project-resubmit/images/validation_pass_index_page.jpeg)

The result from the score.html page

[score validation check](https://marks530.github.io/ms2-project-resubmit/images/score.html_validation_report.jpeg)

All the errors were investigated and resolved as shown in the image below. A single warning remained and was deemed necessary to leave in place.

[Score validation result](https://marks530.github.io/ms2-project-resubmit/images/score.html_validation_result.jpeg)

The result from the leaderboard.html page

[Leaderboard validation check](https://marks530.github.io/ms2-project-resubmit/images/leaderboard.validation.jpeg)

All the problems and warning were investigated and resolved as shown in the image below.

CSS Code Validation Result

[CSS validation check](https://marks530.github.io/ms2-project-resubmit/images/css_validation_result.jpeg)


On each page I evaluated the navbar, from Desktop to Mobile, watching the behaviour of the dropdown menu on each of the different screens. I also ensured the hamburger dropdown menu was working correctly and in position once it was visible on screen.
Testing of the site was done on an iMac using Chrome, Safari and Firefox and checking the iPad and iPhone views in Dev Tools.
On a PC running Windows testing was done with the Chrome, Microsort Edge and Firefox browsers

The biggest challenge was to maintain the shape and the responsiveness across all devices.
I tried using a sticky footer but that didn't work. The answer was to add the class of table-responsive to the scorecard and the leaderboard tables. This meant that on some screens the user would have to scroll to view all the tables.
The hamburger element proved to be troublesome this time around as it did not work on all the pages only the landing page. I discover this was because I had used different versions of the Bootstrap CDN on each page
Creating the image background for all the pages proved to be very difficult. The Chrome Dev tools did help to identify the problem. For some unknown reason the browser inserted another
directory level into the file path by placing the images folder inside the css folder.

During testing I discovered that on the iPad in Chrome Dev Tools the score entry section is jumbled yet it works on an iPad Pro. I was able to correct this by modifying the css rules
Javascript code was checked on 

  -  [jshint](https://jshint.com/)

  The code check identified 2 missing semicolons which were corrected. The code check also identified a number of unused variables one of which was a function definitely in use so I was reluctant to change these elements.

 

## Bugs

* The bootstrap class 'table-responsive' was required to correct the display of the leaderboard card on the leaderboard page. The problem only occurred on an iphone 6 and made the leaderboard card spill onto the div directly below. This meant that a slider control appeared at the side of the leaderboard card and its use is required to see the full score card. 
* I had some issues with the bootstrap link and did not have enough time to resolve all of them
This link was causing problems in the footer section not working to display the logos for the social media links. Using a link with version 4.7.0 fixed the problems.
* There is a problem on the iPhone 6 in landscape mode, the buttons on the score entry page are not aligned correctly. But in portrait mode the app works well.


[StackOverflow](https://stackoverflow.com/questions/48919200/github-pages-only-showing-readme-file) whilst trying to deploy I could only see my ReadMe on Github Pages

## Deployment

Create Github repo 

add links here to deployed site 

  - [deployed site](https://marks530.github.io/ms2-project-resubmit/index.html)



This project was built VSCode and initially tested using the Live Preview option 


This site is hosted using GitHub. My code was directly deployed from the master branch. I added, committed and pushed my updates via the terminal as often as possible. I then deployed the site automatically upon receiving the new commits to the master branch/source. The following commands were used for Github deployment:

**CLI commands** 

```
git add 
git commit -m 
git push 
git status

``` 

## Credits 

- I found [w3schools](https://www.w3schools.com//) to be extremely helpful

- [css-tricks](https://css-tricks.com//) was another site I found to be useful

- [Bootstrap 4](https://getbootstrap.com/docs/4.1/components/) documents proved to be 

- [Javascript docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Thanks to Codexworld for Javascript name validation code

- [Codexworld](https://www.codexworld.com/how-to/validate-first-last-name-with-regular-expression-using-javascript/)

Thanks to MDN Web docs for documentation on using Window.localStorage

- [Mozilla MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)



The structure of the Maths game proved to be ideal for the score entry system I needed for the site so this area  is based on that game. So credit to Matt Rudge for that
The score card and leaderboard are based on the tables found in the Jquery section of the course.

## Content

The image used in the site are almost all my own with the exception of one image taken from 
 - [golf images](https://unsplash.com/s/photos/golf)




## Footnote

I found this project challenging and very time consuming. I spent the vast bulk of the time writing and testing my JavaScript code and that was at the expense of the look and feel of the site. However for the resubmission, I have improved the look and feel of the site. I intend to work on the project in the future and continue to add features.
In summary, I found the whole project both fascinating and in the end had a real sense of achievement 