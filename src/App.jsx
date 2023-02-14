import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateApp } from './apps/PrivateApp/PrivateApp';
import { PublicApp } from './apps/PublicApp/PublicApp';
import { ThemeContext } from './context/ThemeContext';
import { setToken } from './redux/token/tokenAction';
import { setUser } from './redux/user/userAction';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token.token);

  dispatch(setToken(localStorage.getItem('token')) || '');
  dispatch(setUser(JSON.parse(localStorage.getItem('user')) || ''));

  const { theme, setTheme } = useContext(ThemeContext);

  if (token) {
    return (
      <main className={theme}>
        <PrivateApp></PrivateApp>
      </main>
    );
  }
  if (!token) {
    return (
      <main className={theme}>
        <PublicApp></PublicApp>
      </main>
    );
  }
}
export default App;
