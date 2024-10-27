import {useContext} from 'react';
import {LanguageContext} from '../App.tsx';

export const Translation = () => {
  const language = useContext(LanguageContext);

  return (
    <>
      <h1>Translation</h1>
      <p>
        {language === 'English' ? 'Hello World' : 'Hallo Welt'}
      </p>
    </>
  );
};