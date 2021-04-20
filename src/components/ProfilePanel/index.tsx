import React from 'react';
import '../../styles/profile.scss'

const ProfilePanel = () => {
  return (
    <>
      <div className='profile-side'>
        <div className='intro'>
          <img src='https://mohsinht.com/Mohsin_DP.jpg' />
          <div className='name'>Mohsin Hayat</div>
          <div className='headline'>Fullstack Developer & Designer</div>
        </div>
        <div className='details'></div>
        <div className='social'>
          <a href='https://github.com/mohsinht'>
            <i className='fab fa-github'></i>
          </a>
          <a href='https://www.facebook.com/mohsinhayatt'>
            <i className='fab fa-facebook'></i>
          </a>
          <a href='https://www.linkedin.com/in/mohsinhayatt/'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='https://twitter.com/mohsinhyt'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='https://stackoverflow.com/users/7637105/mohsin-hayat'>
            <i className='fab fa-stack-overflow'></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProfilePanel;