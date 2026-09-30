import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="relative w-full py-16 lg:py-32 px-4 overflow-hidden z-0 bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">
      
      {/* Middle Right Blue Gradient */}
      <div 
        className="absolute top-[-30%] right-[-10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] z-[-1] pointer-events-none"
        style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.0552) 53%, rgba(0, 59, 226, 0.0144) 75%, rgba(0, 59, 226, 0) 100%)' }}
      ></div>

      {/* Bottom Left Yellow/Lime Gradient */}
      <div 
  className="absolute bottom-[-5%] left-[-26%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] z-[-1] pointer-events-none"
  style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.85) 0%, rgba(203, 252, 1, 0.35) 40%, rgba(203, 252, 1, 0.08) 70%, rgba(203, 252, 1, 0) 100%)' }}
></div>

      <div className="max-w-[1150px] mx-auto flex flex-col gap-6 lg:gap-32 relative z-10">
        
        {/* ROW 1: Text Left, Frame 11 Right */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left pr-0 lg:pr-10">
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semibold text-[#0B0F19] leading-[1.2] mb-6 tracking-tight">
              Your Path to Professional <br className="hidden lg:block" /> Growth Starts Here!
            </h2>
            <p className="text-[13px] md:text-[14px] lg:text-base text-gray-500 mb-10 leading-relaxed max-w-lg">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
            
            {/* Stats Grid */}
            <div className="flex items-center gap-10 md:gap-16">
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-extrabold text-[#113de5] mb-1">12K</span>
                <span className="text-xs md:text-sm text-gray-500 font-medium">Students</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-extrabold text-[#113de5] mb-1">70+</span>
                <span className="text-xs md:text-sm text-gray-500 font-medium">Courses</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-extrabold text-[#113de5] mb-1">16</span>
                <span className="text-xs md:text-sm text-gray-500 font-medium">Creators</span>
              </div>
            </div>
          </div>

          {/* Image Frame 11 */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-10 lg:mt-0">
            <img 
              src="/Frame 11.png" 
              alt="Student learning" 
              className="w-full max-w-[450px] lg:max-w-[520px] h-auto object-contain relative z-10 drop-shadow-xl"
            />
          </div>
          
        </div>

        {/* ROW 2: Frame 12 Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 mt-10">
          
          {/* Image Frame 12 */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative order-2 lg:order-1">
            <img 
              src="/Frame 12.png" 
              alt="Instructor managing courses" 
              className="w-full max-w-[450px] lg:max-w-[520px] h-auto object-contain relative z-10 drop-shadow-xl"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left pl-0 lg:pl-10 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semibold text-[#0B0F19] leading-[1.2] mb-6 tracking-tight">
              Create & Manage <br className="hidden md:block" /> Courses Easily.
            </h2>
            <p className="text-[13px] md:text-[14px] lg:text-base text-gray-500 mb-8 leading-relaxed max-w-lg">
              ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>
            
            {/* Features List */}
            <ul className="flex flex-col gap-4">
              {[
                "Share Your Expertise", 
                "Monetize Your Passion", 
                "Flexibility and Autonomy", 
                "Build a Community"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#113de5] flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-sm md:text-[15px] font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;