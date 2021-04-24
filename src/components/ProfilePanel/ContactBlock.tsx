import React from 'react';

const ContactBlock = () => {
  return (
    <>
      <div className='profile-block contact-block mt-4'>
        <div className='sec tooltip'>
          <div className='icon'>
            <i className='fas fa-envelope'></i>
          </div>
          <div className='contact-details'>mohsinhayat104@gmail.com</div>
          <span className='tooltiptext'>Click to email me</span>
        </div>
        <div className='sec tooltip'>
          <div className='icon'>
            <i className='fas fa-phone'></i>
          </div>
          <div className='contact-details'>(+92) 336 4256811</div>
          <span className='tooltiptext'>Click to call me</span>
        </div>
        <div className='sec tooltip'>
          <div className='icon'>
            <i className='fas fa-paper-plane'></i>
          </div>
          <div className='contact-details'>Message me</div>
          <span className='tooltiptext'>Submit using web</span>
        </div>
      </div>
    </>
  );
};

export default ContactBlock;
