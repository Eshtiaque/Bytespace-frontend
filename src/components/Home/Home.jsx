import React from 'react';
import Logoipsum from './Logoipsum/Logoipsum';
import DiscoverSection from './DiscoverSection/DiscoverSection';
import LearningPaths from './LearningPaths/LearningPaths';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import CTASection from './CTASection/CTASection';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
  return (
    <>
      <Logoipsum />
      <DiscoverSection />
      <LearningPaths/>
      <FeaturesSection/>
      <CTASection/>
      <Testimonials/>

    </>
  );
};

export default Home;