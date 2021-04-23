import React from 'react';
import '../../styles/global.scss';
import SiteContainer from './SiteContainter';
import ProfilePanel from '../ProfilePanel';
import SiteContent from './SiteContent';
import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SiteContainer>
        <ProfilePanel />
        <SiteContent>{children}</SiteContent>
      </SiteContainer>
    </>
  );
};

export default Layout;
