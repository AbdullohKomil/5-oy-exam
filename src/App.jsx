import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateApp } from './apps/PrivateApp/PrivateApp';
import { PublicApp } from './apps/PublicApp/PublicApp';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const localData = false;
  const {theme, setTheme} = useContext(ThemeContext)

  if (localData) {
    return (
      <main className={`${theme}`}>
        <Routes>
          <Route />
        </Routes>
      </main>
    );
  }

  return (
    <main className={`${theme}`} >
      <Routes>
        <Route
          path='/'
          index
          element={<Navigate to='/login' />}
        />
        <Route
          path='/login'
          element={<PublicApp></PublicApp>}
        />

        <Route path='/register' />
      </Routes>
    </main>
  );
}

export default App;
