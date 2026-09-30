import React from 'react';

const ReviewsTab = () => {
  return (
    <div className="animation-fade-in">
      <h3 className="text-xl font-bold text-gray-900 mb-3">What Learners Are Saying</h3>
      <p className="text-[14px] text-gray-600 leading-relaxed mb-8">
        Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
      </p>
      
      <div className="border border-gray-100 rounded-[20px] p-6 shadow-sm flex flex-col sm:flex-row items-center gap-8 mb-10 mt-6">
        <div className="bg-[#cfff04] rounded-[16px] w-full sm:w-[140px] h-[140px] flex flex-col items-center justify-center shrink-0">
          <span className="text-[14px] font-medium text-black/70 mb-1">Ratings</span>
          <span className="text-5xl font-black text-black">4.7</span>
        </div>
        
        <div className="flex-1 w-full space-y-2">
          {[
            { stars: 5, pct: '80%', count: 720 },
            { stars: 4, pct: '15%', count: 120 },
            { stars: 3, pct: '5%', count: 21 },
            { stars: 2, pct: '2%', count: 12 },
            { stars: 1, pct: '1%', count: 16 }
          ].map((row, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div className="h-full bg-[#cfff04]" style={{ width: row.pct }}></div>
              </div>
              <div className="flex text-gray-700 gap-1 ml-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-3.5 h-3.5 ${i < row.stars ? 'text-gray-700' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span className="text-[12px] text-gray-500 w-8 text-right">{row.count}</span>
            </div>
          ))}
        </div>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-4">Individual Reviews:</h3>
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button className="bg-[#cfff04] text-black px-5 py-2 rounded-full text-[13px] font-medium">All rating</button>
        {[5, 4, 3, 2, 1].map(num => (
          <button key={num} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-[13px] font-medium flex items-center gap-1.5 hover:bg-gray-200 transition-colors">
            <svg className="w-3.5 h-3.5 text-gray-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            {num}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {[
          { name: "PurePearl Studio", role: "UI/UX Designer", text: "\"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!\"" },
          { name: "Albert Flores", role: "UI/UX Designer", text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!" },
          { name: "Cody Fisher", role: "UI/UX Designer", text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process." },
          { name: "Brooklyn Simmons", role: "UI/UX Designer", text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout." }
        ].map((review, idx) => (
          <div key={idx} className="border border-gray-100 rounded-[20px] p-6 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <img src={`https://i.pravatar.cc/150?img=${idx + 15}`} alt={review.name} className="w-10 h-10 rounded-full" />
                <div>
                  <h5 className="text-[14px] font-bold text-gray-900">{review.name}</h5>
                  <p className="text-[12px] text-gray-500">{review.role}</p>
                </div>
              </div>
              <span className="text-[12px] text-gray-400">a year ago</span>
            </div>
            <div className="flex text-gray-700 gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <p className="text-[13px] text-gray-600 leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsTab;