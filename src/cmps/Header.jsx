import React from 'react';
import avatar from '../assets/avataaars.svg';

const Header = () => {
  return (
    <div className='grid h-screen place-items-center bg-red-200'>
      <div className='flex items-center gap-52'>
        <div className='flex flex-col text-start'>
          <h1 className='text-5xl text-blue-300'>Hello! I'm Avner.</h1>
          <br />
          <p className='text-2xl'>
            A multidisciplinary <span className='text-blue-300'>developer</span> with a passion <br /> for creating
            engaging, precise and entertaining user experiences.
          </p>
        </div>
        <div>
          <img src={avatar} />
        </div>
      </div>
    </div>
  );
};

export default Header;
