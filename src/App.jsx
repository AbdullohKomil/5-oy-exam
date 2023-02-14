import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateApp } from './apps/PrivateApp/PrivateApp';
import { PublicApp } from './apps/PublicApp/PublicApp';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const localData = false;
  const { theme, setTheme } = useContext(ThemeContext);

  if (localData) {
    return (
      <main className={`${theme}`}>
        <PrivateApp></PrivateApp>
      </main>
    );
  }

  return (
    <main className={theme}>
      <PublicApp></PublicApp>
    </main>
  );
}

export default App;
