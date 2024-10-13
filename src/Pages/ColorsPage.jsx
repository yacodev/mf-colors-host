import React from 'react';
import { ColorPicker } from 'colorPicker/ColorPicker';
import { ColorList } from 'colorList/ColorList';
import { useColors } from 'colorPicker/useColors';
import { Error } from '../Components/ErrorHandle';

const ColorsPage = () => {
  const {
    handleSubmitSaveColor,
    handelChangeColor,
    color,
    colorsList,
    handleClearColors,
  } = useColors();

  return (
    <>
      <h1 className='text-center bg-dark text-white p-2'>Color picker </h1>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <ColorList
              colorsList={colorsList}
              handleClearColors={handleClearColors}
            />
          </div>
          <div className='col-12 col-md-8'>
            <Error>
              <ColorPicker
                handleSubmitSaveColor={handleSubmitSaveColor}
                handelChangeColor={handelChangeColor}
                color={color}
              />
            </Error>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorsPage;
