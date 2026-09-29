import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
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
              Sign up and come in
            </h1>
            <p className="text-blue-100/80 text-[14px] leading-relaxed">
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
            </p>
          </div>

          <div className="hidden lg:flex flex-1 mt-6 relative min-h-0 justify-start items-center w-full">
            <img 
              src="/loginImages.png" 
              alt="Signup Illustration" 
              className="w-[120%] max-w-[120%] object-contain -ml-8 max-h-[95%]"
            />
          </div>

        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start px-4 sm:px-8 lg:px-12 xl:px-16 h-auto lg:h-full min-h-0 mt-12 lg:mt-0">
          
          <div className="bg-white w-full max-w-[400px] h-auto lg:h-fit rounded-[24px] p-6 sm:p-8 shadow-2xl">
            
            {/* Form Header */}
            <div className="mb-6">
              <span className="text-[#113de5] font-semibold text-[13px] mb-1.5 block text-left">
                Create an Account
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight text-left">
                Welcome to <br className="hidden sm:block" />ByteSpace
              </h2>
            </div>

            {/* Form Fields  */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              
              {/* Added Full Name Field */}
              <div className="space-y-1.5 text-left">
                <label className="text-[13px] font-medium text-gray-700 block">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Jamie Davis" 
                  className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#113de5] focus:ring-1 focus:ring-[#113de5] text-[13px] text-gray-800 placeholder-gray-400 transition-colors"
                />
              </div>

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
                  Continue
                </button>
              </div>
            </form>

            <div className="text-center text-[13px] text-gray-500 mt-12">
              Already have an account? <Link to="/login" className="text-[#113de5] hover:underline font-medium ml-1">Login</Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;