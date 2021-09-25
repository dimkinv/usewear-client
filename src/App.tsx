import React from 'react';
import { AppBar, Toolbar, Typography, createMuiTheme, ThemeProvider, Grid } from '@material-ui/core';
import './App.css';
import { green } from '@material-ui/core/colors';
import { SmartGroup } from './dynamic-forms/smart-group/SmartGroup';
import { generalInfo, generalInfoOfItemFields, item, root } from './dynamic-forms/example-item';
import { SmartGroupController } from './dynamic-forms/smart-group-controller/SmartGroupController';

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
          {/* <SmartGroup fields={generalInfoOfItemFields} isMultiple={true} data={item.generalInfoOfItem[0] as { [id: string]: unknown }} onChange={onGroupChange.bind(null, 'generalInfoOfItemFields')} /> */}
          <SmartGroupController fields={generalInfoOfItemFields} data={item.generalInfoOfItem} onChange={(index, fieldname, value) => onGroupChange(item.generalInfoOfItem, index, fieldname, value)}></SmartGroupController>
        </Grid>
        <Grid item md={4} xs={12}>
          {/* <SmartGroup fields={generalInfo} data={item.generalInfo as { [id: string]: unknown }} onChange={onGroupChange.bind(null, 'generalInfo')} /> */}
        </Grid>
        <Grid item md={4} xs={12}>
          {/* <SmartGroup fields={root} data={item as { [id: string]: unknown }} onChange={onGroupChange.bind(null, 'item')} /> */}
        </Grid>

      </Grid>
    </ThemeProvider>
  );

  function onGroupChange(group: { [id: string]: unknown }[], index: number, fieldName: string, value: unknown) {
    group[index].fieldName = value;
    console.log(group)
  }
}

export default App;
