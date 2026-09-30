import React from 'react';

const AboutTab = () => {
  return (
    <div className="animation-fade-in">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
      <div className="text-[14px] text-gray-600 leading-relaxed space-y-4 mb-10">
        <p>Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.</p>
        <p>In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.</p>
        <p>As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.</p>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-4">Sneak Peak</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden"><img src="/src/assets/course/video1.jpg" alt="Sneak Peek" className="w-full h-full object-cover"/></div>
        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden"><img src="/src/assets/course/video2.jpg" alt="Sneak Peek" className="w-full h-full object-cover"/></div>
        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden"><img src="/src/assets/course/video3.jpg" alt="Sneak Peek" className="w-full h-full object-cover"/></div>
        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden"><img src="/src/assets/course/video4.jpg" alt="Sneak Peek" className="w-full h-full object-cover"/></div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-4">Key Points</h3>
      <ul className="space-y-3">
        {["Foundational Concepts", "Design Principles Mastery", "Advanced Techniques in Digital Creation", "Project Showcase and Critique", "Optimizing for Various Platforms", "Digital Asset Management Best Practices","Monetization Strategies","Capstone Project: Building Your Portfolio"].map((point, index) => (
          <li key={index} className="flex items-center gap-3 text-[14px] text-gray-600">
            <div className="w-5 h-5 rounded-full bg-[#113de5] flex items-center justify-center shrink-0">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutTab;