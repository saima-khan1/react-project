import React, { ReactNode, useState } from 'react';
import './Dropdown.css';

interface DropdownProps {
  options: string[];
  onClick: (option: string) => void;
  children: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onClick, children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    onClick(option);
    setIsOpen(false);
  };

  return (
    <>
    <div className="dropdown">
      <button onClick={toggleDropdown} className={`dropdown-button ${isOpen ? 'open' : ''}`}>
        {children} <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
    </div>
        {isOpen && (
            <div className='options-list'>
                <ul className="dropdown-list">
          {options.map((option) => (
            <li key={option} className="dropdown-item" onClick={() => handleOptionClick(option)}>
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

