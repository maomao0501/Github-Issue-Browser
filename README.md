Github Issue Browser


Prerequisites

1. install node.js

2. test node

3. test npm

4. use create-react-app command-line package to create


Instruction

1. npx create-react-app my-app

2. cd my-app

3. npm start

Problems

The problem was to retrieve data from an api and filter it and then display it on the website as per the requirements given and also implement the pagination, 10 issues per page.


Details

1. Currently, I choose React js library to implement this github issue browser. Using React, it approaches building user interfaces differently by breaking them into components and make views easier to extend and maintain.

2. In the coding challenge, it says that when the applicaiton starts up, it should display the list of issues with some basic information. For this, I create the IssuePage component to render the basic information of the list of issues. First, we have a URL that provided from this document, we fetch the API data and display the list of issues in this applicaiton.

3. And then, the requirement is display the list of issues 10 at a time by implementing pagination on the issue list. So, I create the pagination component to render 10 issues per page. we need curernt page to store the current page number, initially 1. Also, we need issues per page to store the number of issues we want to display in a single page, initially it is 10 according to the coding challenge requirement. In this component, we create page numbers array contains total number of issues like 1,2,3...(total issues / issues per page).


4. Furthermore, the requirement is when an issue is clicked, it should go to another screen that displays more information on the issue. So, I create the issue details component to handle when user click on that issue will display more information of this issue.
1) We use useParams(issue number) to access match.params of the current <Route>, that is path="/issue/:issueNumber".
2) we fetch the API data and display the details of this issue and this comment on this application.

5. Also, we use React router to build a single-page web application with navigation without the page refreshing as the user navigates. 
For example, the idea is to first use react-router to set the route, it states that the same path corresponding to the same component. We have two path here, one is home issue page (/) display the issue list and other is /issue/:issueNumber display the issue detail of that paticular issue.

6.  We use bootstrap to maintain this web application responsive and design the website more faster and easier. 

7. Finally, we can run this in the http://localhost:3000 and I deploy this web application on heroku.

Heroku Link: https://github-issue-browser-2021.herokuapp.com/


Conclusion:

The idea is to first use react-router to set the route, it states that the same path corresponding to the same component. We have two path here, one is home issue page (/) display the issue list and other is /issue/:issueNumber display the issue detail of that paticular issue.
IssuesPage is the component that displays the issue list, call the API to get issues,renders it as a list,and each issue shows the title, status, number, and number of comments.Click on the title to jump to the issue details page,the jump link is/issue/: {issue.number}, the inner page gets to issue.number, and then call the API to get the corresponding issue information, render it, including title, body, status, author, creation time, comments, labels. For the body to be more readable, render with react-markdown. Comments also need to call the API to get it.When calling the API, the loading variable is true, which means that it is loading. at this time, the interface displays a spinning icon, and then displays the actual content after loading.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
