import { useState, useEffect, useRef } from 'react';

const useNavbar = history => {
  const searchInput = useRef(null);
  const [userInput, setUserInput] = useState('');

  const onChange = async event => {
    setUserInput(event.target.value);
  };

  useEffect(() => {
    if (document.activeElement === searchInput.current && !userInput.length) {
      history.push('/browse');
    }
    if (userInput.length > 0) history.push(`/search?q=${userInput}`);
  }, [userInput, searchInput]);

  const onLogoClick = () => {
    setUserInput('');
  };

  return {
    onChange,
    onLogoClick,
    searchInput,
    userInput,
  };
};

export default useNavbar;
