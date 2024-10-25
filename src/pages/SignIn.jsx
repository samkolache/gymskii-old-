import MinimalNavbar from '../components/navbar/MinimalNavbar'
import { NavLink } from 'react-router-dom'

export default function SignIn() {
    return(
        <>
            <MinimalNavbar />
            {/* Container */}
            <div className='grid grid-cols-1 lg:grid-cols-2  min-h-screen'>
                {/* Left Side */}
               <div className='flex flex-col items-center justify-center bg-brand2  pt-12 px-4'>
                    <h1 className='text-3xl md:text-4xl font-bold'>Welcome Back!</h1>
                    <p className='md:text-lg mt-2'>Enter your email and password to access your account</p>
                    <h2 className='text-xl md:text-2xl mt-4 font-semibold text-brandHeading'>Don't have an account?</h2>
                    <p className='mt-2'>Click "Sign up" below to create your free account</p>
                    <NavLink to = "/sign-up"  className = "px-8 py-2 bg-brand text-white text-lg rounded-lg mt-2 font-semibold">Sign Up</NavLink>
               </div>
               {/* Right Side */}
               <div className='flex flex-col items-center justify-center'>
                    <h1 className="text-3xl font-bold">Sign in</h1>
                    <p className='mt-2'>Enter them deets!</p>
                    {/* Form */}
                    <form className='mt-4 w-full max-w-sm'>

                        {/* Email Input */}
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

                        {/* Password Input */}
                        <div className='mt-4'>
                            <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
                            <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
                            placeholder="••••••••"
                            required
                            />
                        </div>

                        {/* Remember me/Forgot Password */}
                        <div className="flex items-center justify-between mt-2">
                            {/* Remember Me */}
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    type="checkbox"
                                    className="h-5 w-5 text-brand focus:ring-brand border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            {/* Forgot Password */}
                            <div>
                                <a href="#" className="text-sm text-brand hover:text-brand-dark">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full mt-4 px-6 py-3 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-50 transition duration-300"
                            >
                            Sign in
                        </button>
                    </form>
                    <p className='text-gray-500 mt-4'>OR CONTINUE WITH</p>
                    <button className='flex items-center justify-center gap-4 px-8 py-2 rounded-lg border mt-2'>
                        <i className="fa-brands fa-google"></i>
                        <p>Google</p>
                    </button>
               </div>
            </div>
        </>
    )
}