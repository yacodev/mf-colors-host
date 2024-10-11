import React from 'react';
import ReactDOM from 'react-dom/client';
import { ColorPicker } from 'colorPicker/ColorPicker';
import { ColorList } from 'colorList/ColorList';
import { useColors } from 'colorPicker/useColors';
import './index.css';

const App = () => {
  const { handleSubmitSaveColor, handelChangeColor, color, colorsList } =
    useColors();

  return (
    <>
      <h1 className='text-center bg-dark text-white p-2'>Color picker </h1>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <ColorList colorsList={colorsList} />
          </div>
          <div className='col-12 col-md-8'>
            <ColorPicker
              handleSubmitSaveColor={handleSubmitSaveColor}
              handelChangeColor={handelChangeColor}
              color={color}
            />
          </div>
        </div>
      </div>
    </>
  );
};
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
