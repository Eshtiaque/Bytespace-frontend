import React, { useState, useEffect } from 'react';

const DiscoverSection = () => {

  const categories = [
    "Music", "Drawing & Painting", "Marketing", "Animation",
    "Social Media", "UI/UX Design", "Creative Marketing",
    "Digital Illustration", "Film & Video", "Crafts",
    "Freelance & Entrepreneurship", "Graphic Design",
    "Photography", "Productivity", "Web Development",
    "Data Science", "Cooking"
  ];

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
    <section className="w-full bg-white py-16 md:py-24 px-4">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center text-center">
        
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#0B0F19] leading-[1.2] mb-5 tracking-tight">
          Discover Your Passion, <br className="hidden sm:block" /> Build Your Skills
        </h2>

        <p className="text-[13px] md:text-sm lg:text-base text-gray-500 mb-10 max-w-3xl leading-relaxed px-2">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
        </p>

        {/* Categories Container */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full mb-16">
          <button className="bg-[#cfff04] text-black font-semibold text-xs md:text-sm lg:text-base px-5 md:px-6 py-2.5 rounded-full hover:bg-[#b8e600] transition-colors">
            Featured
          </button>

          {categories.map((category, index) => (
            <button
              key={index}
              className="bg-[#f5f5f5] text-gray-600 font-medium text-xs md:text-sm lg:text-base px-5 md:px-6 py-2.5 rounded-full hover:bg-gray-200 transition-colors"
            >
              {category}
            </button>
          ))}

          <button className="bg-transparent text-[#113de5] font-semibold text-xs md:text-sm lg:text-base px-5 md:px-6 py-2.5 rounded-full hover:bg-blue-50 transition-colors">
            + More
          </button>
        </div>

        {/* Course Grid Section mapped from fetched state */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-[24px] p-3.5 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
              
              {/* Image Container with Overlays */}
              <div className="relative w-full h-[200px] rounded-[18px] overflow-hidden mb-4">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                
                {/* Image Overlays (Lessons, Duration, Comments) */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-start gap-1.5 overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-1 bg-white/70 backdrop-blur-md px-2 py-1 rounded-md text-[9px] font-medium text-gray-700 whitespace-nowrap">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {course.lessons}
                  </div>
                  <div className="flex items-center gap-1 bg-white/70 backdrop-blur-md px-2 py-1 rounded-md text-[9px] font-medium text-gray-700 whitespace-nowrap">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1 bg-white/70 backdrop-blur-md px-2 py-1 rounded-md text-[9px] font-medium text-gray-700 whitespace-nowrap">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                    {course.comments}
                  </div>
                </div>
              </div>

              {/* Course Title and Rating */}
              <div className="flex justify-between items-start mb-0.5 px-1">
                <h3 className="text-[17px] font-bold text-gray-900 truncate pr-2">{course.title}</h3>
                <div className="flex items-center gap-1 text-[13px] font-medium text-gray-500 shrink-0 mt-0.5">
                  {course.rating}
                  <svg className="w-3.5 h-3.5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </div>
              </div>

              {/* Author */}
<p className="text-[11px] text-gray-400 mb-4 px-1 tracking-wide">
  by <span className="text-[#113de5]">{course.author}</span>
</p>

              {/* Level Badge and Student Avatars */}
              <div className="flex justify-start items-center mb-4 px-1">
                <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-md text-[11px] font-semibold text-gray-500 border border-gray-100">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                  {course.level}
                </div>
                
                <div className="flex -space-x-2 overflow-hidden">
                  {course.studentAvatars.map((avatar, i) => (
                    <img key={i} className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src={avatar} alt="Student Avatar" />
                  ))}
                  <div className="flex items-center justify-center h-6 w-6 rounded-full ring-2 ring-white bg-[#cfff04] text-[8px] font-extrabold text-black z-10 relative">
                    {course.studentCount}
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-0.5 px-1">
                <span className="text-[#113de5] font-extrabold text-lg">${course.price}</span>
                <span className="text-gray-400 text-[10px] font-medium">/{course.pricingType}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DiscoverSection;