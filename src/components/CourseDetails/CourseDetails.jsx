import React, { useState } from 'react';
import AboutTab from './AboutTab';
import LessonTab from './LessonTab';
import ReviewsTab from './ReviewsTab';
import SidebarCard from './SidebarCard';


const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="w-full min-h-screen bg-white font-sans">
      
      <div className="relative w-full bg-[#113de5] pt-12 pb-16 px-4">
        
        {/* Background Grid  */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        ></div>

        <div className="relative z-10 max-w-[1200px] mx-auto">
          
          <div className="w-full flex justify-between items-start gap-4 mb-2">
            
            {/* Title & Subtitle (Left Aligned) */}
            <div className="flex-1 lg:max-w-[calc(100%-412px)]">
              <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-white leading-tight">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <h2 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-white mt-1.5">
                Unlock the Power of Digital Creation with Expert Guidance
              </h2>
            </div>
            
            <div className="hidden lg:flex w-[380px] justify-end shrink-0">
              <button className="flex items-center gap-1.5 bg-[#cfff04] text-black font-semibold text-[13px] px-5 py-2.5 rounded-full hover:bg-[#b8e600] mt-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                Share
              </button>
            </div>

          </div>
          
          {/* Byline and Badges  */}
          <div className="w-full lg:w-[calc(100%-412px)] mb-6 lg:mb-8">
            <p className="text-blue-200/80 text-[13px] md:text-[14px] mt-2 mb-4">
              by <span className="text-[#cfff04] font-medium cursor-pointer">purepearl studio</span>
            </p>
            
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <div className="bg-white text-gray-800 px-4 py-2 rounded-full flex items-center gap-2 text-[12px] md:text-[13px] font-medium">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#113de5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                Intermediate
              </div>
              <div className="bg-white text-gray-800 px-4 py-2 rounded-full flex items-center gap-2 text-[12px] md:text-[13px] font-medium">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#113de5]" fill="currentColor" viewBox="0 0 24 24"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                4.8 (172 reviews)
              </div>
              <div className="bg-white text-gray-800 px-4 py-2 rounded-full flex items-center gap-2 text-[12px] md:text-[13px] font-medium">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#113de5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                199 Students
              </div>
            </div>

            {/* Mobile Share Button */}
            <button className="flex lg:hidden items-center gap-2 bg-[#cfff04] text-black font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#b8e600] mt-4 mb-2 w-fit">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
              Share
            </button>
          </div>

          {/* Video and Sidebar Area */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left Area (Video) */}
            <div className="flex-1 w-full">
              <div className="w-full lg:w-[90%] aspect-[16/9] bg-gray-200 rounded-[24px] shadow-2xl relative overflow-hidden group mt-auto">
                <img 
                  src="/src/assets/course/videomain.jpg" 
                  alt="Course Video" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all cursor-pointer">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar Placeholder (Desktop) */}
            <div className="hidden lg:block w-[380px] shrink-0 relative">
              <div className="absolute top-0 right-0 w-full z-20">
                <SidebarCard />
              </div>
            </div>

          </div>
          
        </div>
      </div>

      {/* --- 2. BOTTOM WHITE SECTION (Tabs and Content) --- */}
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-8 pt-10 pb-20">
        
        {/* Left Area (Tabs) */}
        <div className="flex-1 w-full lg:w-[calc(100%-412px)]">
          
          {/* MOBILE ONLY: Sidebar Card shows up here below video */}
          <div className="block lg:hidden w-full mb-10">
            <SidebarCard />
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <button 
              onClick={() => setActiveTab('about')}
              className={`px-6 py-2.5 rounded-full text-[13px] md:text-sm font-medium transition-colors border ${activeTab === 'about' ? 'bg-[#cfff04] text-black border-[#cfff04]' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
            >
              About
            </button>
            <button 
              onClick={() => setActiveTab('lesson')}
              className={`relative px-6 py-2.5 rounded-full text-[13px] md:text-sm font-medium transition-colors border ${activeTab === 'lesson' ? 'bg-[#cfff04] text-black border-[#cfff04]' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
            >
              Lesson
              {activeTab === 'lesson' && <span className="absolute top-0 right-1 w-2 h-2 rounded-full"></span>}
            </button>
            <button 
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-2.5 rounded-full text-[13px] md:text-sm font-medium transition-colors border ${activeTab === 'reviews' ? 'bg-[#cfff04] text-black border-[#cfff04]' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
            >
              Reviews
            </button>
          </div>

          {activeTab === 'about' && <AboutTab />}
          {activeTab === 'lesson' && <LessonTab />}
          {activeTab === 'reviews' && <ReviewsTab />} 

          

        </div>

        {/* Empty Right Spacer */}
        <div className="hidden lg:block w-[380px] shrink-0 pointer-events-none"></div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .animation-fade-in { animation: fadeIn 0.3s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
      `}} />

      <hr className="border-gray-200" />
    </div>
  );
};

export default CourseDetails;