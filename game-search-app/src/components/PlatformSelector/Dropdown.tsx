import React, { useState } from 'react';
import './Dropdown.css';

interface DropdownProps {
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="dropdown">
      <button onClick={toggleDropdown} className={`dropdown-button ${isOpen ? 'open' : ''}`}>
        Platform <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
    </div>
        {isOpen && (
            <div className='options-list'>
                <ul className="dropdown-list">
          {options.map((option, index) => (
            <li key={index} className="dropdown-item">
              {option}
            </li>
          ))}
        </ul>
            </div>
        
      )}
    </>
      

  );
};

export default Dropdown;

