import React from 'react';
import { AppBar, Toolbar, Typography, createMuiTheme, ThemeProvider, Grid } from '@material-ui/core';
import './App.css';
import { green } from '@material-ui/core/colors';
import { generalInfoOfItemFields, item } from './dynamic-forms/example-item';
import { SmartGroupController } from './dynamic-forms/smart-group-controller/SmartGroupsController';

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
      <AppBar className="" position="relative" color="secondary">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Usewear
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          {/* <SmartGroup fields={generalInfoOfItemFields} isMultiple={true} data={item.generalInfoOfItem[0] as { [id: string]: unknown }} onChange={onGroupChange.bind(null, 'generalInfoOfItemFields')} /> */}
          <SmartGroupController fields={generalInfoOfItemFields} data={item.generalInfoOfItem} onChange={(groupIndex:number, changedGroup: { [id: string]: unknown }) => onGroupChange(item.generalInfoOfItem, groupIndex, changedGroup)}></SmartGroupController>
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

  function onGroupChange(groups: { [id: string]: unknown }[], groupIndex: number, changedGroup: { [id: string]: unknown }) {
    groups[groupIndex] = changedGroup;
    console.log(item)
  }
}

export default App;
