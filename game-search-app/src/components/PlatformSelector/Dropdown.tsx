import React, { ReactNode, useState, useCallback, useMemo } from 'react';
import './Dropdown.css';

interface DropdownProps {
  options: string[];
  onClick: (option: string) => void;
  children: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onClick, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleOptionClick = useCallback(
    (option: string) => {
      onClick(option);
      setIsOpen(false);
    },
    [onClick]
  );

  const optionsList = useMemo(() => {
    console.log('Rendering options list');
    return (
      isOpen && (
        <div className='options-list'>
          <ul className="dropdown-list">
            {options.map((option) => (
              <li key={option} className="dropdown-item" onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )
    );
  }, [isOpen, options, handleOptionClick]);

  return (
    <>
      <div className="dropdown">
        <button onClick={toggleDropdown} className={`dropdown-button ${isOpen ? 'open' : ''}`}>
          {children} <span className="arrow">{isOpen ? '▲' : '▼'}</span>
        </button>
      </div>
      {optionsList}
    </>
  );
};

export default Dropdown;


