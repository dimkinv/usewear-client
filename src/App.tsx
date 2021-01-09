import React from 'react';
import { AppBar, Toolbar, Typography, createMuiTheme, ThemeProvider, Grid } from '@material-ui/core';
import './App.css';
import { green } from '@material-ui/core/colors';
import { SmartGroup } from './dynamic-forms/smart-group/SmartGroup';
import { FormField, SmartInputType } from './dynamic-forms/smart-form.model';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: green,
    secondary: {
      main: '#3949ab',
    },
  },
});

const testData: FormField[] = [
  {
    inputType: SmartInputType.text,
    label: 'Test 1',
    propertyName: 'test',
    placeholder: 'Test Placeholder',
    value: 'something'
  },
  {
    inputType: SmartInputType.text,
    label: 'Test 2',
    propertyName: 'test1',
    placeholder: 'Test1 Placeholder',
    value: 'something1'
  }
];

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="relative" color="secondary">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Usewear
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <SmartGroup fields={testData} />
        </Grid>
        <Grid item md={4} xs={12}>

        </Grid>
        <Grid item md={4} xs={12}>

        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
