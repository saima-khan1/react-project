// import React, { useState } from 'react';
// import './ColoModeSwitch.css';


// interface ColorModeSwitchProps {
//   initialColorMode: 'light' | 'dark';
// }




// const ColorModeSwitch: React.FC<ColorModeSwitchProps> = ({ initialColorMode }) => {
//   const [colorMode, setColorMode] = useState<'light' | 'dark'>(initialColorMode);

//   const toggleColorMode = () => {
//     const newColorMode = colorMode === 'light' ? 'dark' : 'light';
//     setColorMode(newColorMode);
//     console.log(newColorMode);
//   };
  

//   return (
//     <div className="color-mode-switch">
//       <input
//         type="checkbox"
//         id="colorSwitch"
//         className="color-switch-checkbox"
//         checked={colorMode === 'dark'}
//         onChange={toggleColorMode}
//       />
//       <label htmlFor="colorSwitch" className="color-switch-label">
//         <span className="color-switch-inner"></span>
//         <span className="color-switch-switch"></span>
//       </label>
//       <span className="color-mode-label">Dark Mode</span>
//     </div>
//   );
// };

// export default ColorModeSwitch;

import React, { useState } from 'react';
import './ColoModeSwitch.css';

interface ColorModeSwitchProps {
  initialColorMode: 'light' | 'dark';
}

const ColorModeSwitch: React.FC<ColorModeSwitchProps> = ({ initialColorMode }) => {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>(initialColorMode);

  const toggleColorMode = () => {
    const newColorMode = colorMode === 'light' ? 'dark' : 'light';
    setColorMode(newColorMode);
  };

  return (
    <div className={`color-mode-switch ${colorMode}`}>
      <input
        type="checkbox"
        id="colorSwitch"
        className="color-switch-checkbox"
        checked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
      <label htmlFor="colorSwitch" className="color-switch-label">
        <span className="color-switch-inner"></span>
        <span className="color-switch-switch"></span>
      </label>
      <span className="color-mode-label"></span>
    </div>
  );
};

export default ColorModeSwitch;
