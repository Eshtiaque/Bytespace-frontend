import React from 'react';

const SidebarCard = () => {
    return (
        <div className="bg-white rounded-[24px] p-6 lg:p-8 shadow-2xl w-full border border-gray-100">
    <h3 className="text-[18px] font-bold text-gray-900 mb-4">112 Lessons (24 hours)</h3>
    
    <div className="space-y-4 mb-4">
      <div className="flex justify-between items-start text-[13px]">
        <div className="flex gap-3 text-gray-700">
          <span className="text-gray-400">01</span>
          <span>Introduction to Digital Assets</span>
        </div>
        <span className="text-[#113de5] font-medium shrink-0">12 mins</span>
      </div>
      <div className="flex justify-between items-start text-[13px]">
        <div className="flex gap-3 text-gray-700">
          <span className="text-gray-400">02</span>
          <span>Design Principles for Impacts</span>
        </div>
        <span className="text-[#113de5] font-medium shrink-0">21 mins</span>
      </div>
      <div className="flex justify-between items-start text-[13px]">
        <div className="flex gap-3 text-gray-700">
          <span className="text-gray-400">03</span>
          <span>Advanced Techniques in Digital Creation</span>
        </div>
        <span className="text-[#113de5] font-medium shrink-0">16 mins</span>
      </div>
    </div>
    
    <p className="text-[13px] text-gray-500 mb-6">99 more videos</p>
    
    <p className="text-[13px] text-gray-700 leading-relaxed mb-6">
      Ready to Dive in? Enroll Now and Start Building Your Digital Future!
    </p>
    
    <div className="flex items-end gap-1 mb-6">
      <span className="text-3xl font-bold text-[#113de5]">$25</span>
      <span className="text-[13px] text-gray-400 mb-1">/lifetime</span>
    </div>
    
    <button className="w-full bg-[#cfff04] text-black font-semibold py-3.5 rounded-full hover:bg-[#b8e600] transition-colors mb-8 shadow-md text-sm">
      Enroll Now
    </button>
    
    <h4 className="font-bold text-gray-900 mb-4 text-[15px]">This course include</h4>
    <ul className="space-y-3 mb-8">
      <li className="flex items-center gap-3 text-[13px] text-gray-600">
        <svg className="w-4 h-4 text-[#113de5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
        Learning Resources
      </li>
      <li className="flex items-center gap-3 text-[13px] text-gray-600">
        <svg className="w-4 h-4 text-[#113de5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
        Quality Lesson Videos
      </li>
      <li className="flex items-center gap-3 text-[13px] text-gray-600">
        <svg className="w-4 h-4 text-[#113de5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
        Certificate of Completion
      </li>
      <li className="flex items-center gap-3 text-[13px] text-gray-600">
        <svg className="w-4 h-4 text-[#113de5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
        Private Consultation
      </li>
    </ul>
    
    <div className="border-t border-gray-100 pt-6">
      <div className="flex items-center gap-3 mb-4">
        <img src="https://i.pravatar.cc/150?img=12" alt="PurePearl Studio" className="w-10 h-10 rounded-full bg-pink-200" />
        <div>
          <h5 className="text-[14px] font-bold text-gray-900">PurePearl Studio</h5>
          <p className="text-[12px] text-gray-500">Professional Creator</p>
        </div>
      </div>
      <p className="text-[12px] text-gray-500 leading-relaxed mb-4">
        Ready to Dive in? Enroll Now and Start Building Your Digital Future!
      </p>
      <button className="border border-gray-300 text-gray-700 text-[12px] font-medium py-2 px-5 rounded-full hover:bg-gray-50 transition-colors">
        See Full Profile
      </button>
    </div>
  </div>
    );
};

export default SidebarCard;