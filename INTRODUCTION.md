# Introduction

## How to run

```sh
# with yarn
yarn install
yarn start

# with npm
npm i
npm start
```

## Solution Walkthrough

For my solution to this front-end challenge, I mainly focused on creating a clean, ubiquitous style for the user experience with a simple, straightforward application structure. To achieve this, I used Material UI, `react-hook-form`, and `react-router` to do a lot of the heavy lifting when it came to the UI and form behavior. I also used `little-state-machine` for lightweight state management, `axios` for API interactions, and `yup` for all the form validation. These packages all gave me the benefit of requiring little to no set up or configuration, which meant that I could easily integrate them into this application and quickly build a prototype with them. 

App Structure:
  - `/screens`
    - Entry points for all the routes
  - `/containers`
    - Parent components for any components that require any kinds of API interactions, such as data fetching or requests
  - `/components` 
  - `/actions`
    - Where actions for interacting with the `little-state-machine` store are kept
  - `/hooks`

Some features that I would have fleshed out given more time:

- Unit testing
- Caching
- Storing passwords securely in app state (via hashing/encryption)
- Adding a node env for app configuration

I had plans to specifically unit test the `MoreInfo.js` container/component since it has the most user interaction and data fetching of all the components, but sadly configuring jest was a bit more of a beast than I was expecting. Some flows I would have tested are:

- Ensuring the container renders the loading spinner when loading from the API
- Ensuring the container renders the error screen when an error occurs while loading from the API
- Ensuring the component renders correctly when the colors array prop is passed
- Ensuring that the Additional Info page cannot be submitted if a favorite color is not selected
- Ensuring that the Additional Info page cannot be submitted if the terms and conditions are not accepted
- Ensuring that the Additional Info page submits successfully when all the fields are set
- Ensuring that the user can navigate back to the previous page

