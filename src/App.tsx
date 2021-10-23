import React from 'react';
import './App.css';
import { AppBar, Toolbar, Typography, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ItemDetailsPage } from './pages/item-details/ItemDetails';
import { ItemsPage } from './pages/items/Items';
import { green } from '@mui/material/colors';
import { typedUseSelector } from './store/store';

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

function App() {
  const pageTitle = typedUseSelector(store => store.mainStore.pageTitle)
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <AppBar className="app-bar" position="relative" color="secondary">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              {pageTitle}
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path='/items/:type'>
            <ItemsPage />
          </Route>
          <Route path='/item-details/:id'>
            <ItemDetailsPage />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
