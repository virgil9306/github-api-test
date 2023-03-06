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

## Development

#### Issue Tracking

Issue tracking available on GitHub.

#### Features Implemented

- Custom issue search
- Pagination and page limits
- API error handling
  - Note: Instruction "implement rate limiting" was understood to mean "handle the rate limiting of the API" rather than "implement client-side rate limiting logic"
- Basic test (only one component)
- Custom CSS

#### Roadmap

Due to time constraints the following were not implemented, but could be a good exercise to include:

- [ ] Loading screens for when changing pages, for better UX and prevent people from pressing the page button too much
- [ ] Unit testing (mock API responses)
- [ ] Visual, snapshot testing
- [ ] Removal of unused files (bloat) in `create-react-app` boilerplate
- [ ] Cache some pages of results for UX (need to consider use case: what to do when the data gets updated?)
- [ ] Axios for API call: handle API error by status code than error message presence in response body (403 - GH usage limit exceeded error)

=======
# github-api-test
Test for GitHub API with rate limiting and pagination.
