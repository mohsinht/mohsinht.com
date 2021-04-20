import React from 'react';
import '../styles/global.scss';
import SiteContainer from '../components/Layout/SiteContainter';
import ProfilePanel from '../components/ProfilePanel';
import SiteContent from '../components/Layout/SiteContent';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <SiteContainer>
        <ProfilePanel />
        <SiteContent />
      </SiteContainer>
    </>
  );
}
