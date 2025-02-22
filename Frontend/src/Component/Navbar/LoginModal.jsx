import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginModal.css';

function LoginModal({ isOpen, onClose, onSocialLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login/", { username, password });
            localStorage.setItem("token", response.data.access);
            alert("Login successful");
            navigate("/");
        } catch (error) {
            alert("Invalid credentials");
        }
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-100" onClose={onClose}>
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

                            <form onSubmit={handleLogin} className="form-group">
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

                                <button type="submit" className="submit-button">
                                    Log in
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
                                    onClick={() => onSocialLogin('Facebook')}
                                    className="social-button"
                                >
                                    <FaFacebook className="social-icon facebook-icon" />
                                    Continue with Facebook
                                </button>

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

export default LoginModal;