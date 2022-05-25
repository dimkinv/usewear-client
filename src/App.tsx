import React, { useEffect } from 'react';
import './App.css';
import { AppBar, Toolbar, Typography, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailsPage } from './pages/item-details/item-details';
import { ItemsPage } from './pages/items/Items';
import { green } from '@mui/material/colors';
import { typedUseSelector } from './store/store';
import { useDispatch } from 'react-redux';
import { fetchListOptionsThunk } from './store/items/items.thunks';
import { LoginPage } from './pages/login/Login';

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

  const pageTitle = typedUseSelector(store => store.mainStore.pageTitle)
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <AppBar className="app-bar" position="relative" color="secondary">
          <Toolbar>
            <Typography variant="h4" color="inherit" noWrap>
              {pageTitle}
            </Typography>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path='/items/:type' element={<ItemsPage />} />
          <Route path='/item-details/:id' element={<ItemDetailsPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
