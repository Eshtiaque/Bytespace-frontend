import React, { useState, useEffect } from 'react';
import CourseCard from '../../CourseCard/CourseCard';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left mt-10">
          
          {courses.slice(0, 6).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
          
        </div>

      </div>
    </section>
  );
};

export default DiscoverSection;