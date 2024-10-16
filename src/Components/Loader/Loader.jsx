import React from 'react';

import './Loader.css';

export const Loader = () => {
  return (
    <div className='text-center p-3'>
      <div className='lds-spinner bg-gray-100 shadow-xl rounded-md'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
