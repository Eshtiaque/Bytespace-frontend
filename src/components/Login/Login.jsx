import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="relative w-full min-h-screen lg:h-screen bg-[#113de5] flex flex-col overflow-y-auto lg:overflow-hidden">
      
      <div 
        className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      ></div>

      <div className="absolute top-6 left-6 lg:top-10 lg:left-12 xl:left-30 z-20">
        <Link to="/" className="inline-block">
          <svg className="w-10 h-10 text-[#cfff04]" viewBox="0 0 40 40" fill="currentColor">
            <path d="M10 0v40h12c8.8 0 16-7.2 16-16s-7.2-16-16-16h-4V0h-8zm8 16h4c4.4 0 8 3.6 8 8s-3.6 8-8 8h-4V16z"/>
          </svg>
        </Link>
      </div>

      
      <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto h-full pt-24 lg:pt-32 pb-8 md:justify-center lg:justify-start">
        
       
        <div className="flex flex-col w-full lg:w-1/2 px-6 sm:px-12 xl:px-20 h-auto lg:h-full min-h-0 items-center lg:items-start text-center lg:text-left">
          
          <div className="max-w-[400px] shrink-0 mt-4 lg:mt-0">
            <h1 className="text-3xl xl:text-4xl font-bold text-white mb-3">
              Sign in with ease
            </h1>
            <p className="text-blue-100/80 text-[14px] leading-relaxed">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
            </p>
          </div>

          <div className="hidden lg:flex flex-1 mt-6 relative min-h-0 justify-start items-center w-full">
            <img 
              src="/loginImages.png" 
              alt="Login Illustration" 
              className="w-[120%] max-w-[120%] object-contain -ml-8 max-h-[95%]"
            />
          </div>

        </div>

        {/* Right Column - Login Form */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start px-4 sm:px-8 lg:px-12 xl:px-16 h-auto lg:h-full min-h-0 mt-12 lg:mt-0">
          
          {/* Card  */}
          <div className="bg-white w-full max-w-[400px] h-auto  lg:h-fit rounded-[24px] p-6 sm:p-8 shadow-2xl">
            
            {/* Form Header */}
            <div className="mb-6">
              <span className="text-[#113de5] font-semibold text-[13px] mb-1.5 block text-left">
                Sign In
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight text-left">
                Welcome Back
              </h2>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              
              <div className="space-y-1.5 text-left">
                <label className="text-[13px] font-medium text-gray-700 block">Email</label>
                <input 
                  type="email" 
                  placeholder="designer@example.com" 
                  className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#113de5] focus:ring-1 focus:ring-[#113de5] text-[13px] text-gray-800 placeholder-gray-400 transition-colors"
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-[13px] font-medium text-gray-700 block">Password</label>
                <input 
                  type="password" 
                  placeholder="********" 
                  className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#113de5] focus:ring-1 focus:ring-[#113de5] text-[13px] text-gray-800 placeholder-gray-400 transition-colors"
                />
              </div>

              <div className="flex justify-end pt-1">
                <button 
                  type="submit" 
                  className="bg-[#cfff04] text-black font-semibold text-[13px] px-8 h-10 rounded-full hover:bg-[#b8e600] transition-colors shadow-md w-full sm:w-auto"
                >
                  Sign In
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-[13px] text-gray-400 font-light">or</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            {/* Social Login Buttons*/}
            <div className="flex justify-center gap-3 mb-6">
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              </button>
            </div>

            {/* Signup Link */}
            <div className="text-center text-[13px] text-gray-500">
              New user? <Link to="/signup" className="text-[#113de5] hover:underline font-medium ml-1">Create an account</Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;