import React, { useState, useEffect } from 'react';
import CourseCard from '../CourseCard/CourseCard';

const Search = () => {
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

  const tags = [
    "Music", "Drawing & Painting", "Marketing", "Animation", 
    "Social Media", "UI/UX Design", "Creative Marketing", "Cooking"
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* Search Header Section */}
      <div className="relative w-full bg-[#113de5] py-16 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-semibold text-white mb-8 tracking-wide">
            Find Your Next Course
          </h1>

          {/* Search Input and Dropdown */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-2xl">
            <div className="flex-1 w-full bg-white rounded-full flex items-center px-5 h-11 md:h-12 shadow-lg">
              <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full bg-transparent focus:outline-none ml-3 text-sm md:text-base text-gray-800 placeholder-gray-400 h-full"
              />
            </div>
            <button className="w-full sm:w-auto bg-[#cfff04] text-black font-semibold text-sm md:text-base px-6 h-11 md:h-12 rounded-full flex items-center justify-center gap-2 hover:bg-[#b8e600] transition-colors shrink-0 shadow-lg">
              Courses
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Filters & Course Grid Section */}
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        
        {/* Top Filter Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
              Filter
            </button>
            <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              Level
            </button>
            <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              Category
            </button>
          </div>

          <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>
            Most relevant
          </button>
        </div>

        {/* Tags Row */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <button className="bg-[#cfff04] text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#b8e600] transition-colors">
            Featured
          </button>
          {tags.map((tag, index) => (
            <button key={index} className="bg-[#f5f5f5] text-gray-600 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              {tag}
            </button>
          ))}
        </div>

        {/* Course Grid Component*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 18).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Static Pagination UI */}
        <div className="flex justify-center items-center gap-4 md:gap-6 mt-16 mb-8">
          
          <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 text-gray-300 cursor-not-allowed">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="text-lg md:text-xl font-bold text-gray-300 transition-colors">1</button>
            <button className="text-lg md:text-xl font-bold text-gray-800 hover:text-gray-500 transition-colors">2</button>
            <button className="text-lg md:text-xl font-bold text-gray-800 hover:text-gray-500 transition-colors">3</button>
            <button className="text-lg md:text-xl font-bold text-gray-800 hover:text-gray-500 transition-colors">4</button>
            <button className="text-lg md:text-xl font-bold text-gray-800 hover:text-gray-500 transition-colors">5</button>
          </div>

          {/* Next Arrow Button */}
          <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
        </div>

      </div>
    </div>
  );
};

export default Search;