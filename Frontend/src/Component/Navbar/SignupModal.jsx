import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import axios from 'axios';
import './SignupModal.css';
function SignupModal({ isOpen, onClose, onSignup, onSocialSignup }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        const response = await fetch("http://127.0.0.1:8000/api/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            setMessage("Registration successful! Please login.");
        } else {
            setMessage(data.message || "Registration failed.");
        }
    };


    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
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

                <div className="modal-container">
                    <div className="modal-content-wrapper">
                        <Dialog.Panel className="modal-panel">
                            <div className="modal-title">
                                <Dialog.Title>Welcome to Pinterest</Dialog.Title>
                            </div>

                            <form onSubmit={handleRegister} className="form-group">
                                <div>
                                    <label className="input-label">User Name</label>
                                    <input
                                        type="username"
                                        className="input-field"
                                        placeholder="username"
                                        value={username}
                                        onChange={(e) => setUserName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="input-label">Email id</label>
                                    <input
                                        type="email"
                                        className="input-field"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="input-label">New Password</label>
                                    <input
                                        type="password"
                                        className="input-field"
                                        placeholder="Create a password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                <button type="submit" className="submit-button">
                                    Continue
                                </button>

                                <div className="divider">
                                    <div className="divider-line">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="divider-text">
                                        <span className="px-2 bg-white text-gray-500">OR</span>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => onSocialSignup('Google')}
                                    className="social-button"
                                >
                                    <FaGoogle className="social-icon" />
                                    Continue with Google
                                </button>
                            </form>
                        </Dialog.Panel>
                        {message && <p>{message}</p>}
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

export default SignupModal;