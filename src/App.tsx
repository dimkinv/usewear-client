import React, { useEffect } from 'react';
import './App.css';
import {  ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { ItemDetailsPage } from './pages/item-details/item-details';
import { ItemsPage } from './pages/items/Items';
import { green } from '@mui/material/colors';
import {  } from './store/store';
import { useDispatch } from 'react-redux';
import { fetchListOptionsThunk } from './store/items/items.thunks';
import { LoginPage } from './pages/login/Login';
import { ProtectedPage } from './pages/login/ProtectedPage';
import { Dial } from './shared/Dial';
import { Header } from './shared/Header';
import { Dashboard } from './pages/dashboard/Dashboard';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: green[800]
    },
    secondary: {
      main: '#3949ab',
    },
  },
});

export const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListOptionsThunk());
  }, [dispatch])

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
      <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path='/items/:type' element={<ProtectedPage><ItemsPage /></ProtectedPage>} />
            <Route path='/item-details/:id' element={<ProtectedPage><ItemDetailsPage /></ProtectedPage>} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
      <Dial />
    </>
  );
}

export default App;
