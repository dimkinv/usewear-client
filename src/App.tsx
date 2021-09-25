import React from 'react';
import './App.css';
import { AppBar, Toolbar, Typography, ThemeProvider, Grid } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ItemDetailsPage } from './pages/item-details/ItemDetails';
import { ItemsPage } from './pages/items/Items';
import { green } from '@mui/material/colors';

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
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <AppBar className="app-bar" position="relative" color="secondary">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Usewear
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path='/items/:type'>
            <ItemsPage />
          </Route>
          <Route path='/item-details'>
            <ItemDetailsPage />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
