import {Todo} from './components/Todo.tsx';
import {Posts} from './components/Posts.tsx';
import {PostDetail} from './components/PostDetail.tsx';
import {Counter} from './components/Counter.tsx';
import {createContext, useState} from 'react';
import {Translation} from './components/Translation.tsx';

const DefaultLanguage = 'English';

export const LanguageContext = createContext(DefaultLanguage);

const App = () => {
  const [language, setLanguage] = useState(DefaultLanguage);

  return (
    <LanguageContext.Provider value={language}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem'}}>
        <div>
          <select onChange={ (e) => setLanguage(e.target.value)}>
            <option value="English">English</option>
            <option value="German">German</option>
          </select>

          <Translation/>
        </div>
        <Counter/>
        <hr/>
        <Todo/>
        <hr/>
        <Posts/>
        <hr/>
        <PostDetail/>
      </div>
    </LanguageContext.Provider>
  )
}

export default App;