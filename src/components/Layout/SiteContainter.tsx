import React from 'react';
import '../../styles/layout.scss';
import { Helmet } from 'react-helmet';

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
      <main className='site-container'>{props.children}</main>
    </>
  );
};

export default SiteContainer;
