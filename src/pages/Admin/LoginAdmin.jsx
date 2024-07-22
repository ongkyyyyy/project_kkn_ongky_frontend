import { useState } from 'react';
import { login } from '../../api/apiUser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginAdmin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const data = { username, password };
            const response = await login(data);

            if (response.status) {
                toast.success(response.message);
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            toast.error('Login failed. Please try again.');
        }
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen pt-5" style={{ backgroundImage: `url('../src/assets/img/login-bg3.png')` }}>
                <div className="shadow-xl p-8 w-full max-w-lg bg-white" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1)' }}>
                    <h2 className="text-4xl text-center font-poppinsserif text-customcp11">Login Admin</h2>
                    <h4 className="mb-10 text-center font-inter text-customcp16">By Kelompok 38 Dompol KKN 85 UAJY</h4>
                    <form>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-customcp11 text-xl font-poppinsserif mb-1 pl-2">Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="border-b border-gray-300 px-3 py-2 w-full focus:outline-none focus:border-customcp11"
                                    placeholder="Enter your username"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-customcp11 text-xl font-poppinsserif mb-1 pl-2">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="border-b border-gray-300 px-3 py-2 w-full focus:outline-none focus:border-customcp11"
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="button"
                                onClick={handleLogin}
                                className="bg-customcp16 text-white font-poppinsserif py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
        </>
    );
};

export default LoginAdmin;