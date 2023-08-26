
import React from 'react';
import './ColoModeSwitch.css';

interface ColorModeSwitchProps {
  darkMode: boolean;
  toggleMode:()=> void;
}

const ColorModeSwitch: React.FC<ColorModeSwitchProps> = ({ darkMode, toggleMode }) => {
  return (
    <div className= "dark-mode-toggle">
      <label className='switch'>
        <input type="checkbox" checked={darkMode} onChange={toggleMode} />
        <span className='slider round'></span>
      </label>
    </div>
  );
};

export default ColorModeSwitch;
