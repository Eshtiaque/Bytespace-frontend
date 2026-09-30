import React from 'react';

const LessonTab = () => {
  return (
    <div className="animation-fade-in">
      <h3 className="text-xl font-bold text-gray-900 mb-3">Explore the Modules</h3>
      <p className="text-[14px] text-gray-600 leading-relaxed mb-8">
        Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
      </p>

      <h3 className="text-xl font-bold text-gray-900 mb-6">Lesson List</h3>
      
      <div className="space-y-6 mb-10">
        {[
          { title: "Module 1: Introduction to Digital Assets", desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation." },
          { title: "Module 2: Design Principles for Impact", desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills." },
          { title: "Module 4: User-Centric Design Strategies", desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design." },
          { title: "Module 5: Interactive Media and Engagement", desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences." },
          { title: "Module 6: Project Showcase and Critique", desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence." },
          { title: "Module 7: Optimizing Digital Assets for Various Platforms", desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes." }
        ].map((mod, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-2xl bg-[#cfff04] flex items-center justify-center shrink-0 shadow-sm mt-1">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" /></svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-[15px] mb-1">{mod.title}</h4>
              <p className="text-[13px] text-gray-500 leading-relaxed">{mod.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">Lesson Content</h3>
      <p className="text-[14px] text-gray-600 leading-relaxed mb-10">
        Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
      </p>

      <h3 className="text-xl font-bold text-gray-900 mb-3">Lesson Progress Tracking</h3>
      <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
        Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
      </p>
      
      <div className="border border-gray-200 rounded-xl p-6">
        <div className="flex justify-between items-end mb-2">
          <span className="text-[13px] text-gray-900 font-medium">Learning Progress</span>
        </div>
        <div className="text-4xl font-black text-gray-900 mb-4">55%</div>
        <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-[#cfff04]" style={{ width: '55%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LessonTab;