import React from 'react';
import '../../styles/layout.scss';
import Footer from '../Footer';
import { useLayout } from '../Context/Layout/LayoutContext';

const SiteContent = (props: any) => {
  const { isProfileExpanded, expandProfile } = useLayout();

  return (
    <>
      <div className={`site-content ${isProfileExpanded ? '' : 'expanded'}`}>
        <div className='site-curtain'></div>
        <div className='content-scrollable'>
          {props.children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SiteContent;
