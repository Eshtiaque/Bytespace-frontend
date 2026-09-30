import React from 'react';

const Logoipsum = () => {
  const logos = [
    "/five-logos/Frame.png",
    "/five-logos/Frame1.png",
    "/five-logos/Frame2.png",
    "/five-logos/Frame3.png",
    "/five-logos/Frame4.png",
  ];

  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:justify-between opacity-70">
          
          {logos.map((logo, index) => (
            <img 
              key={index}
              src={logo} 
              alt={`Brand Logo ${index + 1}`} 
              className="h-6 md:h-8 lg:h-10 object-contain hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer" 
            />
          ))}

        </div>
        
      </div>
    </section>
  );
};

export default Logoipsum;