// Import necessary dependencies from external libraries
import { Dialog, Transition } from '@headlessui/react'; // Used for modal transitions and animations
import { Fragment, useState } from 'react'; // React hooks for state management and UI fragments
import { FaFacebook, FaGoogle } from 'react-icons/fa'; // Import social media icons for login buttons
import { useNavigate } from 'react-router-dom'; // Hook for navigation between routes
import axios from 'axios'; // Library for making HTTP requests
import './LoginModal.css'; // Import external CSS file for styling

/**
 * LoginModal Component
 * 
 * This component represents a modal for user login. It allows users to log in via:
 * - A username and password form
 * - Social login buttons (Facebook & Google)
 * 
 * Props:
 * - isOpen (boolean): Controls whether the modal is visible
 * - onClose (function): Function to close the modal
 * - onSocialLogin (function): Function to handle social login actions
 */
function LoginModal({ isOpen, onClose, onSocialLogin }) {
    // State to manage user input fields (username and password)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    // Hook for programmatic navigation
    const navigate = useNavigate();

    /**
     * Handles form submission for login
     * - Sends login credentials to backend API
     * - Stores authentication token in local storage
     * - Navigates to home page on successful login
     * - Shows error alert on invalid credentials
     */
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            // Send login request to backend API
            const response = await axios.post("http://127.0.0.1:8000/api/login/", { username, password });
            
            // Store authentication token in local storage
            localStorage.setItem("token", response.data.access);
            
            alert("Login successful"); // Notify user of successful login
            navigate("/"); // Redirect user to home page
        } catch (error) {
            alert("Invalid credentials"); // Notify user of login failure
        }
    };

    return (
        // Modal transition animation (fade in/out)
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-100" onClose={onClose}>
                {/* Background overlay for the modal */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="modal-overlay" />
                </Transition.Child>

                {/* Modal container */}
                <div className="modal-container">
                    <div className="modal-content-wrapper">
                        {/* Modal panel containing the login form */}
                        <Dialog.Panel className="modal-panel">
                            <div className="modal-title">
                                <Dialog.Title>Welcome to Pinterest</Dialog.Title>
                            </div>

                            {/* Login form */}
                            <form onSubmit={handleLogin} className="form-group">
                                {/* Username input field */}
                                <div>
                                    <label className="input-label">Username</label>
                                    <input
                                        type="text"
                                        className="input-field"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>

                                {/* Password input field */}
                                <div>
                                    <label className="input-label">Password</label>
                                    <input
                                        type="password"
                                        className="input-field"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                {/* Login button */}
                                <button type="submit" className="submit-button">
                                    Log in
                                </button>

                                {/* Divider for separating login methods */}
                                <div className="divider">
                                    <div className="divider-line">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="divider-text">
                                        <span className="px-2 bg-white text-gray-500">OR</span>
                                    </div>
                                </div>

                                {/* Social login button (Facebook) */}
                                <button
                                    type="button"
                                    onClick={() => onSocialLogin('Facebook')}
                                    className="social-button"
                                >
                                    <FaFacebook className="social-icon facebook-icon" />
                                    Continue with Facebook
                                </button>

                                {/* Social login button (Google) */}
                                <button
                                    type="button"
                                    onClick={() => onSocialLogin('Google')}
                                    className="social-button"
                                >
                                    <FaGoogle className="social-icon google-icon" />
                                    Continue with Google
                                </button>
                            </form>
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

// Export LoginModal component for use in other parts of the application
export default LoginModal;
