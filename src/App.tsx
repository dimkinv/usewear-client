import React from 'react';
import { AppBar, Toolbar, Typography, createMuiTheme, ThemeProvider, Grid } from '@material-ui/core';
import './App.css';
import { green } from '@material-ui/core/colors';
import { SmartGroup } from './dynamic-forms/smart-group/SmartGroup';
import { generalInfo, generalInfoOfItemFields, item, root } from './dynamic-forms/example-item';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: green,
    secondary: {
      main: '#3949ab',
    },
  },
});

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
          <SmartGroup fields={generalInfoOfItemFields} isMultiple={true} data={item.generalInfoOfItem as unknown as { [id: string]: unknown }[]} />
        </Grid>
        <Grid item md={4} xs={12}>
        <SmartGroup fields={generalInfo} isMultiple={true} data={item.generalInfo as unknown as { [id: string]: unknown }[]} />
        </Grid>
        <Grid item md={4} xs={12}>
        <SmartGroup fields={root} isMultiple={true} data={item as unknown as { [id: string]: unknown }[]} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
