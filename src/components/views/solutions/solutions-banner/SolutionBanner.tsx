import React from 'react';

import { Banner } from '@/components';
import projects from '@assets/images/solutions/projects.svg';
import background from '@assets/images/solutions/banner.svg';

const SolutionBanner = () => {
  return (
    <Banner
      className="solution-banner"
      imgAlt="projects"
      imgSrc={projects}
      title={['Solutions']}
      contentSpace="col-6"
      imageSpace="col-6"
      backgroundImg={background.src}
    />
  );
};

export default SolutionBanner;
