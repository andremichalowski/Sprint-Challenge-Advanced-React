import React from 'react';

import useDarkMode from './useDarkMode';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useDarkMode('dark-mode', false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className='dark-mode__toggle'>
      <div
        onClick={toggleMode}
        className={darkMode ? 'App-header' : 'dark-mode'}
      >
        Womens World Cup
      </div>
    </div>
  );
}

export default DarkMode;