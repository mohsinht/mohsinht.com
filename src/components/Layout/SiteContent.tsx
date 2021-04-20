import React from 'react';
import '../../styles/layout.scss';
import { Helmet } from 'react-helmet';

const SiteContent = (props: any) => {
  return (
    <>
      <Helmet>
        <script
          src='https://kit.fontawesome.com/6145703c0a.js'
          crossOrigin='anonymous'
        ></script>
      </Helmet>
      <main className='site-content'>{props.children}</main>
    </>
  );
};

export default SiteContent;
