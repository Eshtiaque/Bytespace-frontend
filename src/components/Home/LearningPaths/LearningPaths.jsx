import React from 'react';

const LearningPaths = () => {
  const paths = [
    {
      id: 1,
      title: "Design",
      icon: (
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Development",
      icon: (
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 3,
      title: "IT & Software",
      icon: (
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Business",
      icon: (
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Marketing",
      icon: (
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Photography",
      icon: (
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center text-center">
        
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0B0F19] mb-4">
          Explore Diverse Learning Paths at Bytespace
        </h2>

        
        <p className="text-[13px] md:text-sm lg:text-[15px] text-gray-500 mb-12 max-w-[850px] leading-relaxed">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>

        {/* Grid Container for Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 w-full">
          {paths.map((path) => (
            <div 
              key={path.id} 
              className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer bg-white group"
            >
              {/* Icon Container with Lime Green Background */}
              <div className="w-14 h-14 bg-[#cfff04] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {path.icon}
              </div>
              
              {/* Category Title */}
              <h3 className="text-[13px] md:text-[14px] lg:text-[15px] font-semibold text-gray-800">
                {path.title}
              </h3>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default LearningPaths;