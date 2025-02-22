// Import necessary dependencies
import { Dialog, Transition } from '@headlessui/react'; // Modal and animation components from Headless UI
import { Fragment, useState } from 'react'; // React hooks and Fragment
import { FaGoogle } from 'react-icons/fa'; // Google icon for social login button
import axios from 'axios'; // HTTP client for making API requests (not used in this file)
import './SignupModal.css'; // Import CSS styles for modal design

/**
 * SignupModal Component
 * 
 * This component is a modal for user registration. It allows users to sign up using an email,
 * username, and password or sign up using a social login (Google). The modal appears
 * based on the `isOpen` prop and can be closed using the `onClose` callback.
 * 
 * Props:
 * - `isOpen` (boolean): Controls the visibility of the modal.
 * - `onClose` (function): Function to close the modal.
 * - `onSignup` (function): Callback function when user successfully registers.
 * - `onSocialSignup` (function): Callback function when user opts for social signup (Google).
 */
function SignupModal({ isOpen, onClose, onSignup, onSocialSignup }) {
    // State variables for handling form input fields and messages
    const [email, setEmail] = useState(''); // Stores the email input value
    const [password, setPassword] = useState(''); // Stores the password input value
    const [username, setUserName] = useState(''); // Stores the username input value
    const [message, setMessage] = useState(''); // Stores messages related to registration (success/failure)

    /**
     * Handles user registration when the form is submitted.
     * Sends user credentials (username, email, password) to the backend API.
     * Displays a success or failure message based on the API response.
     *
     * @param {Event} e - Form submit event
     */
    const handleRegister = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            // Send a POST request to the API endpoint for user registration
            const response = await fetch("http://127.0.0.1:8000/api/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }), // Convert input data to JSON format
            });

            const data = await response.json(); // Parse the JSON response from the server

            // If registration is successful, show success message
            if (response.ok) {
                setMessage("Registration successful! Please login.");
                onSignup && onSignup(); // Call the onSignup callback if provided
            } else {
                // If registration fails, show an error message
                setMessage(data.message || "Registration failed.");
            }
        } catch (error) {
            setMessage("An error occurred. Please try again."); // Handle network errors
        }
    };

    return (
        // `Transition` component for handling modal visibility animation
        <Transition appear show={isOpen} as={Fragment}>
            {/* Modal wrapper */}
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                {/* Background overlay transition */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    {/* Modal background overlay to dim the screen */}
                    <div className="modal-overlay" />
                </Transition.Child>

                {/* Modal container to center the content */}
                <div className="modal-container">
                    <div className="modal-content-wrapper">
                        {/* Modal content panel */}
                        <Dialog.Panel className="modal-panel">
                            {/* Modal header with title */}
                            <div className="modal-title">
                                <Dialog.Title>Welcome to Pinterest</Dialog.Title>
                            </div>

                            {/* Registration form */}
                            <form onSubmit={handleRegister} className="form-group">
                                {/* Username input field */}
                                <div>
                                    <label className="input-label">User Name</label>
                                    <input
                                        type="text"
                                        className="input-field"
                                        placeholder="Enter your username"
                                        value={username}
                                        onChange={(e) => setUserName(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Email input field */}
                                <div>
                                    <label className="input-label">Email Address</label>
                                    <input
                                        type="email"
                                        className="input-field"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Password input field */}
                                <div>
                                    <label className="input-label">New Password</label>
                                    <input
                                        type="password"
                                        className="input-field"
                                        placeholder="Create a strong password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Submit button to register */}
                                <button type="submit" className="submit-button">
                                    Continue
                                </button>

                                {/* Divider for alternative sign-up option */}
                                <div className="divider">
                                    <div className="divider-line">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="divider-text">
                                        <span className="px-2 bg-white text-gray-500">OR</span>
                                    </div>
                                </div>

                                {/* Google authentication button for social login */}
                                <button
                                    type="button"
                                    onClick={() => onSocialSignup('Google')}
                                    className="social-button"
                                >
                                    <FaGoogle className="social-icon" /> {/* Google icon */}
                                    Continue with Google
                                </button>
                            </form>
                        </Dialog.Panel>

                        {/* Display success or error messages */}
                        {message && <p className="message">{message}</p>}
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

export default SignupModal;
