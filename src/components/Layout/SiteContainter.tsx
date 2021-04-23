import React from 'react';
import '../../styles/layout.scss';
import { Helmet } from 'react-helmet';
import LayoutProvider from '../Context/Layout/LayoutProvider';

const SiteContainer = (props: any) => {
  return (
    <>
      <Helmet>
        <title>Mohsin Hayat - Resume</title>
        <script
          src='https://kit.fontawesome.com/6145703c0a.js'
          crossOrigin='anonymous'
        ></script>
      </Helmet>
      <LayoutProvider>
        <main className='site-container'>{props.children}</main>
      </LayoutProvider>
    </>
  );
};

export default SiteContainer;
