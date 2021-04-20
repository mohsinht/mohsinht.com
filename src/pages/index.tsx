import React from 'react';
import '../styles/global.scss';
import SiteContent from '../components/Layout/SiteContent';
import ProfilePanel from '../components/ProfilePanel';

export default function Home() {
  return (
    <>
      <SiteContent>
        <ProfilePanel />
      </SiteContent>
    </>
  );
}
