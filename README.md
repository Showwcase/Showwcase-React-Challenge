# Showwcase Developer Challenge

## General idea

We hope to evaluate your programming skills in a project that has a very similar stack to ours, a preview of what you will be working with at Showwcase. 

## What you will be building

Your challenge is to create a simple web app in the technology you are applying to work in. Your task is to simulate how a user will be able to input their educational background into their Showwcase profile page. 

You should not just implement the most basic solution. This is a chance to show off your abilities, creativity, and impress.

## Requirements

- We use the create-react-app typescript template, you can find instructions here:
[https://create-react-app.dev/docs/adding-typescript/](https://create-react-app.dev/docs/adding-typescript/)
- Users must be able to enter as many educational experiences as they please;
- When the user is typing the name of the school they went, it should be auto completed using an API call.
- Users must be able to enter the following information: Name of School, Degree, Field of study, Start year, End Year (Or expected), Grade, a Description field, and anything else you wish to add.

## Guidance and instructions

- This is a free API that has data on Universities worldwide, feel free to use it or if you find something better make sure to use it. 
[https://github.com/Hipo/university-domains-list-api](https://github.com/Hipo/university-domains-list-api)
- Here are a few technologies we use at Showwcase and we would prefer if you used them as well should you see the need for them:
    - Styled Components: [https://styled-components.com/](https://styled-components.com/)
    - Styled System is a nice helper to Styled Components: [https://styled-system.com/](https://styled-system.com/)
    - Hooks: [https://reactjs.org/docs/hooks-intro.html](https://reactjs.org/docs/hooks-intro.html)
    - Redux: [https://redux.js.org/](https://redux.js.org/)
    - React Modal: [https://github.com/reactjs/react-modal](https://github.com/reactjs/react-modal)

## What we will be looking for

- Functionality
- Code Format
- Project Structure
- Scalability
- Maintainability
- Use of industry best practices

Some specific things that we may be looking for:

- Typescript if you know it
- Atomic Design in React
- Correct implementation of a state manager
- Correct implementation of a navigation solution
- Componentization
- Communication in the repo and/or code
- Best practices with API calls and data
- Separation of concerns between business and UI logic
- Frequent commits

# Goals

Implement the screens based off the wireframes and api above using advanced techniques and industry best practices for your platform. Note that the wireframes may not be complete, so use your best judgment for UI/UX implementation. 

## Introduction and Home screen:

- Static text
- Input field for user
- Enter button takes user to the Main screen

!(https://github.com/Showwcase/Showwcase-Intern-React-Challenge/MacBook_-_2.jpg?raw=true)

## Main screen

- Dynamic text
- Button to open up new modal to add a new education component
- Side panel acts as a bookmark menu of the list of education added
- Each new education added should appear above the previous, i.e. descending order of most recent

![Showwcase%20Developer%20Challenge%203d422949c1054bb08a50f69199ec9f8f/MacBook_-_3.jpg](Showwcase%20Developer%20Challenge%203d422949c1054bb08a50f69199ec9f8f/MacBook_-_3.jpg)

## Add education modal

- Background Main screen should dim down when modal opens
- Modal allows the user to add the relevant information and save it.

![Showwcase%20Developer%20Challenge%203d422949c1054bb08a50f69199ec9f8f/MacBook_-_4.jpg](Showwcase%20Developer%20Challenge%203d422949c1054bb08a50f69199ec9f8f/MacBook_-_4.jpg)

© 2020 Showcase Creators Inc. All rights reserved. Certain information contained herein is derived from information which is protected by copyrights held by Showcase Creators Inc. This code challenge, including any parts of it, cannot be duplicated, distributed, copied, modified, used to make a derivative work or used in any way without the prior written consent of Showcase Creators Inc.
