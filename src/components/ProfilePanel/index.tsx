import React from 'react';
import '../../styles/profile.scss';
import { useLayout } from '../Context/Layout/LayoutContext';
import ContactBlock from './ContactBlock';
import LocationBlock from './LocationBlock';

const ProfilePanel = (props: any) => {
  const { isProfileExpanded, expandProfile } = useLayout();
  const onClickExpand = () => {
    expandProfile();
  };
  return (
    <>
      <div className={`profile-side ${isProfileExpanded ? '' : 'hidden'}`}>
        <div className='intro'>
          <img src='https://mohsinht.com/Mohsin_DP.jpg' />
          <div className='name'>Mohsin Hayat</div>
          <div className='headline'>Fullstack Developer & Designer</div>
          <div className='hide-btn' onClick={() => onClickExpand()}>
            <i
              className={`fas fa-chevron-circle-${
                isProfileExpanded ? 'left' : 'right'
              }`}
            ></i>
          </div>
        </div>
        <div className='details'>
          <LocationBlock />
          <div className='details-content'>
            Web Development Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam
            quaerat tenetur pariatur doloribus. Web Development Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Delectus esse commodi
            deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur
            doloribus. Web Development Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi!
            Veniam quaerat tenetur pariatur doloribus. Web Development Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse
            commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur
            doloribus. Web Development Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi!
            Veniam quaerat tenetur pariatur doloribus. Web Development Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse
            commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur
            doloribus. Web Development Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi!
            Veniam quaerat tenetur pariatur doloribus. Web Development Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse
            commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur
            doloribus. Web Development Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Delectus
          </div>

          <ContactBlock />
        </div>
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
