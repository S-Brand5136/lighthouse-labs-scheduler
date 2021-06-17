# Interview Scheduler

Interview Scheduler is a _fullstack_ web app that is designed to allow students to book interviews with designated interviewers. The front-end is built with **Create-react-app**, and the back-end is powered by **Express**. It was built during week 7/8 of my time at [Lighthouse Labs](https://www.lighthouselabs.ca/).

A Demo of this app can be found here -> [lighthouse-scheduler demo](https://60ca81220bd5d909c1c8fdc6--dazzling-varahamihira-88e10e.netlify.app/), its hosted using a combination of heroku and netlify. If the appointment data does not show straight away, heroku is just taking a hot minute to spin up the server for us!

### Table of Contents

1. [Dependencies](#dependencies)
2. [Final Product](#final)
3. [Set up](#setUp)
4. [How to](#howto)
5. [Tests](#tests)

## Dependencies used <a name='dependencies'></a>

- [Axios](https://axios-http.com/docs/intro)
- [React](https://reactjs.org/)
- [Classnames](https://www.npmjs.com/package/classnames)
- [Normalize](https://www.npmjs.com/package/normalize.css)

## Dev Dependencies used

- [Storybook](https://storybook.js.org/)
- [node-sass](https://www.npmjs.com/package/node-sass)
- [prop-types](https://www.npmjs.com/package/prop-types)
- [react-hooks-testing-library](https://react-hooks-testing-library.com/)
- [react-test-renderer](https://reactjs.org/docs/test-renderer.html)

## Final Product <a name="final"></a>

#### Main page

![Main Page](https://github.com/S-Brand5136/lighthouse-labs-scheduler/blob/master/docs/scheduler-main.png)

#### Editting an Appointment

!["Edit Appointment"](https://github.com/S-Brand5136/lighthouse-labs-scheduler/blob/master/docs/scheduler-edit.png)

## Setup <a name='setUp'></a>

make a git clone of this repository.

```bash
  $ git clone git@github.com:S-Brand5136/tweeter.git
```

2. Install dependencies using the `npm install` command.

```bash
  $ npm install
```

3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8000/>.

```bash
  $ npm run local
```

4. Go to <http://localhost:8000/> in your browser.

## How to use <a name='howto'></a>

Once the project has succesfully installed and been started up you can immediatly start booking new interviews. Just click on the + symbol on any empty time slot.

If your running a some dummy data will have to be mocked in /src/components/hooks/useApplicationData.js in the base useReducer state object. It should follow this kind of outline

```JSON
Days: {
    [
  {
    "id": 1,
    "name": "Monday",
    "appointments": [
      1,
      2,
      3,
      4,
      5
    ],
    "interviewers": [
      1,
      2,
      3,
      8,
      9
    ],
    "spots": 2
  },
}

Appointments: {
  "1": {
    "id": 1,
    "time": "12pm",
    "interview": {
      "student": "Linda Jones-Miller",
      "interviewer": 8
    }
  }

Interviewers: {
  "1": {
    "id": 1,
    "name": "Sylvia Palmer",
    "avatar": "https://i.imgur.com/LpaY82x.png"
  }
```

## Tests <a name='tests'></a>

This project has a couple different methods for testing.

- Jest is used for unit testing/integration testing
- Storybook is used for testing individual components
- Cypress is used for E2E testing

#### Running Jest Test Framework

Running the Jest tests is as easy as just running the command below on your CLI

```sh
npm test
```

If you want to take a look at the coverage of the tests created the command below will print a break down. A .coverage directory in the root directory of the project will also be generated. This is useful to view a more GUI based print out in the browser with the index.html file

```bash
npm test -- --coverage
```

#### Running Storybook Visual Testbed

Storybook tests can be run with the command below and viewed in the browser

```sh
npm run storybook
```

#### Cypress

The Cypress tests were created with the practice of having Cypress installed globally. If you also have it installed globally the command below will spin up a new cypress test instance. If you don't more information about how to install it locally can be found on their [Docs](https://www.cypress.io/)
