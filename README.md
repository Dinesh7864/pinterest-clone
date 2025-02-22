# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)








# Pinterest Clone Authentication Modals

This project includes three key React components that handle user authentication for a Pinterest-like application. The components include:

1. **SignupModal**
   - A modal dialog that allows users to create a new account.
   - Captures username, email, and password.
   - Sends a POST request to an API endpoint (`/api/register/`) for user registration.
   - Displays a success or error message based on the response.
   - Includes an option to sign up using Google authentication.

2. **LoginModal**
   - A modal dialog that allows users to log in to their account.
   - Captures username and password.
   - Sends a POST request to an API endpoint (`/api/login/`) for authentication.
   - If successful, stores the authentication token in `localStorage` and navigates to the homepage.
   - Includes options for social logins using Facebook and Google.

3. **Navigation**
   - The main navigation bar for the application.
   - Displays buttons for "Explore", "About", "Business", and "Press".
   - Provides "Log in" and "Sign up" buttons that trigger the respective modals.
   - Integrates with the `LoginModal` and `SignupModal` components.

## Technologies Used
- React.js
- Tailwind CSS / Custom CSS
- React Icons (`react-icons/fa`)
- Axios for API requests
- React Router (`useNavigate`) for navigation
- Headless UI for modal transitions

## Installation
1. Clone the repository.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## API Endpoints
- **POST `/api/register/`**: Registers a new user.
- **POST `/api/login/`**: Authenticates a user and returns a token.

## Usage
- Click on "Sign up" to register a new account.
- Click on "Log in" to authenticate with existing credentials.
- Use social login buttons for quick authentication via Google or Facebook.

## Future Enhancements
- Add password recovery functionality.
- Implement persistent authentication with token refresh.
- Improve UI/UX with additional animations and styling.

