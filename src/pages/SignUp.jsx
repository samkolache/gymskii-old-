import MinimalNavbar from '../components/navbar/MinimalNavbar';
import { NavLink } from 'react-router-dom';

export default function SignUp() {
    return (
        <>
            <MinimalNavbar />
            {/* Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                {/* Left Side */}
                <div className="flex flex-col items-center justify-center bg-brand2 pb-12 pt-24 px-4 lg:px-8 lg:py-0">
                    <h1 className="text-3xl md:text-4xl font-bold text-center lg:text-left">Hey there!</h1>
                    <p className="md:text-lg lg:text-lg mt-2 max-w-lg text-center lg:text-left">
                        Welcome to gymskii, we are excited to have you! Enter some information to get started in your progressive overload journey :)
                    </p>
                    <h2 className="text-xl md:text-2xl mt-4 font-semibold text-center lg:text-left text-brandHeading">Already have an account?</h2>
                    <p className="mt-2 text-center lg:text-left">Click "Sign in" below to log into your existing account</p>
                    <NavLink to="/sign-in" className="px-8 py-2 bg-brand text-white text-lg rounded-lg mt-4 font-semibold">
                        Sign in
                    </NavLink>
                </div>
                
                {/* Right Side */}
                <div className="flex flex-col items-center justify-center mt-4 lg:mt-0 px-4 py-4 lg:px-8">
                    <h1 className="text-3xl lg:text-4xl font-bold text-center">Sign up</h1>
                    <p className="mt-2 text-center">Let's get started!</p>
                    
                    {/* Form */}
                    <form className="mt-4 w-full max-w-lg">
                        {/* First Name and Last Name in a Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="first-name" className="block text-lg font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    id="first-name"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
                                    placeholder="First name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-lg font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    id="last-name"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
                                    placeholder="Last name"
                                    required
                                />
                            </div>
                        </div>

                        {/* Username and Email in a Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="username" className="block text-lg font-medium text-gray-700">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
                                    placeholder="Username"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password and Confirm Password in a Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block text-lg font-medium text-gray-700">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        {/* Date of Birth and Gender in a Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="dob" className="block text-lg font-medium text-gray-700">Date of Birth</label>
                                <input
                                    type="date"
                                    id="dob"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="gender" className="block text-lg font-medium text-gray-700">Gender</label>
                                <select
                                    id="gender"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
                                    required
                                >
                                    <option value="" disabled selected>Select your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Primary Fitness Goal Dropdown */}
                        <div className="mt-4">
                            <label htmlFor="fitness-goal" className="block text-lg font-medium text-gray-700">What is your primary fitness goal?</label>
                            <select
                                id="fitness-goal"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
                                required
                            >
                                <option value="" disabled selected>Select your goal</option>
                                <option value="lose-weight">Lose weight</option>
                                <option value="build-muscle">Build muscle</option>
                                <option value="maintain-fitness">Maintain fitness</option>
                                <option value="increase-endurance">Increase endurance</option>
                            </select>
                        </div>

                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            className="w-full mt-6 px-6 py-3 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-50 transition duration-300"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Continue with Google */}
                    <p className="text-gray-500 mt-4">OR CONTINUE WITH</p>
                    <button className="flex items-center justify-center gap-4 px-8 py-2 rounded-lg border mt-2">
                        <i className="fa-brands fa-google"></i>
                        <p>Google</p>
                    </button>
                </div>
            </div>
        </>
    );
}
