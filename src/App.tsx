import {useTranslation} from 'react-i18next';

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>App</h1>
      <p>{t('Welcome to React')}</p>
    </div>
  )
}

export default App;