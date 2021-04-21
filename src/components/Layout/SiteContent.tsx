import React from 'react';
import '../../styles/layout.scss';
import Footer from '../Footer';

const SiteContent = (props: any) => {
  return (
    <>
      <div className={`site-content ${props.isExpanded ? 'expanded' : ''}`}>
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
