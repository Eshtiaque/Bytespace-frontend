import React, { useState, useEffect } from 'react';
import CourseCard from '../CourseCard/CourseCard';

const Creators = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/courses.json');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses data:", error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen">
      
      {/* 1. Blue Creator Profile Header Section */}
      <div className="relative w-full bg-[#113de5] py-12 md:py-16 px-4 overflow-hidden">
        
        <div 
          className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        ></div>

        {/* Profile Content Container */}
        <div className="relative z-10 max-w-[1200px] mx-auto">
          
          {/* Top: Avatar and Info */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8 mb-6">
            
            {/* Creator Avatar */}
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-[20px] md:rounded-[28px] overflow-hidden shrink-0 bg-pink-200 border-2 border-white/10 shadow-xl">
              <img 
                src="https://i.pravatar.cc/150?img=32" 
                alt="PurePearl Studio" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Creator Text Info */}
            <div className="flex-1 w-full">
              <div className="flex flex-wrap items-center gap-3 mb-1.5 md:mb-2">
                <h1 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-white tracking-wide">
                  PurePearl Studio
                </h1>
                <span className="bg-[#cfff04] text-black font-bold text-[10px] md:text-[11px] px-3.5 py-1 rounded-full">
                  Creator
                </span>
              </div>
              
              <p className="text-blue-100 text-[13px] md:text-[15px] font-light mb-4 md:mb-5">
                Passionate UI/UX, Web designer
              </p>
              
              <p className="text-blue-50/85 text-[12px] md:text-[14px] leading-relaxed max-w-[900px] font-light">
                Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together! <br className="hidden md:block"/>
                Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors, from digital designs to multimedia projects, each piece tells a unique story. <br className="hidden md:block"/>
                Explore the world of creativity with me.
              </p>
            </div>
          </div>

          {/* Bottom: Stats and Follow Button */}
          <div className="flex flex-row flex-wrap items-center justify-between gap-4 mt-8 md:mt-10 w-full">
            
            {/* Products & Followers Stats */}
            <div className="flex items-center gap-3 md:gap-4">
              <div className="bg-white px-5 md:px-6 py-2 md:py-2.5 rounded-full flex items-center gap-2 shadow-sm">
                <span className="text-[#113de5] font-semibold text-sm md:text-base">3</span>
                <span className="text-gray-700 font-medium text-xs md:text-sm">Products</span>
              </div>
              <div className="bg-white px-5 md:px-6 py-2 md:py-2.5 rounded-full flex items-center gap-2 shadow-sm">
                <span className="text-[#113de5] font-semibold text-sm md:text-base">12</span>
                <span className="text-gray-700 font-medium text-xs md:text-sm">Followers</span>
              </div>
            </div>
            
            {/* Follow Button */}
            <button className="bg-[#cfff04] text-black font-semibold text-sm md:text-base px-8 md:px-10 py-2.5 md:py-3 rounded-full hover:bg-[#b8e600] transition-colors shadow-lg">
              Follow
            </button>
            
          </div>
        </div>
      </div>

      {/* 2. Filters & Course Grid Section (White Background) */}
      <div className="max-w-[1200px] mx-auto px-4 py-12 md:py-16">
        
        {/* Top Filter Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <button className="flex items-center gap-2 border border-gray-300 bg-white text-gray-700 px-5 py-2.5 rounded-full text-[13px] md:text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
              Filter
            </button>
            <button className="flex items-center gap-2 border border-gray-300 bg-white text-gray-700 px-5 py-2.5 rounded-full text-[13px] md:text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              Level
            </button>
            <button className="flex items-center gap-2 border border-gray-300 bg-white text-gray-700 px-5 py-2.5 rounded-full text-[13px] md:text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              Category
            </button>
          </div>

          <button className="flex items-center gap-2 border border-gray-300 bg-white text-gray-700 px-6 py-2.5 rounded-full text-[13px] md:text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>
            Most relevant
          </button>
        </div>

        {/* Course Grid Component  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 6).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

      </div>
      <hr className="border-gray-300" />
    </div>
  );
};

export default Creators;