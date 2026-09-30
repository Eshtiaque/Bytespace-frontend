import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      role: "Enthusiastic Learner",
      image: "https://i.pravatar.cc/150?img=47",
      text: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."'
    },
    {
      id: 2,
      name: "James L.",
      role: "Lifelong Learner",
      image: "https://i.pravatar.cc/150?img=11", 
      text: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."'
    },
    {
      id: 3,
      name: "Alex B.",
      role: "Inspired Creator",
      image: "https://i.pravatar.cc/150?img=12", 
      text: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."'
    }
  ];

  return (
    <section className="relative w-full bg-[#fcfdfa] py-16 lg:py-24 px-4 overflow-hidden z-0">
      
      {/* Background Radial Gradients - Full Width Coverage */}
      <div 
        className="absolute top-[-45%] left-[20%] w-[600px] md:w-[900px] h-[600px] md:h-[900px] z-[-1] pointer-events-none"
        style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.138) 53%, rgba(203, 252, 1, 0.036) 75%, rgba(203, 252, 1, 0) 100%)' }}
      ></div>
      
      <div 
        className="absolute top-[-15%] right-[-30%] w-[600px] md:w-[900px] h-[600px] md:h-[900px] z-[-1] pointer-events-none"
        style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.4) 0%, rgba(203, 252, 1, 0.092) 53%, rgba(203, 252, 1, 0.024) 75%, rgba(203, 252, 1, 0) 100%)' }}
      ></div>

      <div 
        className="absolute bottom-[-35%] left-[-25%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] z-[-1] pointer-events-none"
style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.55) 0%, rgba(0, 59, 226, 0.25) 53%, rgba(0, 59, 226, 0.08) 75%, rgba(0, 59, 226, 0) 100%)' }}      ></div>


      <div className="max-w-[1000px] mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-12 lg:mb-16 items-start">
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-semibold text-[#0B0F19] leading-[1.2] tracking-tight">
            Discover What Our <br className="hidden lg:block" /> Community Is Saying
          </h2>
          <p className="text-[13px] md:text-sm text-gray-700 leading-relaxed font-medium">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-[1000px] mx-auto">          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-[24px] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-shadow duration-300 flex flex-col h-full border border-white/50"
            >
              {/* Avatar Profile Picture */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden mb-4 md:mb-5 bg-gray-100">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Name and Role */}
              <div className="mb-4 md:mb-5">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-0.5">{testimonial.name}</h3>
                <p className="text-[12px] md:text-[13px] text-[#113de5] font-medium">{testimonial.role}</p>
              </div>
              
              {/* Testimonial Text */}
              <p className="text-[13px] md:text-[14px] leading-relaxed text-gray-500 font-medium flex-grow">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;