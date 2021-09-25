import React from 'react';
import { AppBar, Toolbar, Typography, createMuiTheme, ThemeProvider, Grid } from '@material-ui/core';
import './App.css';
import { green } from '@material-ui/core/colors';
import { generalInfoFields, generalInfoOfItemFields, item, root } from './dynamic-forms/example-item';
import { SmartGroupController } from './dynamic-forms/smart-group-controller/SmartGroupsController';
import { GroupData } from './dynamic-forms/smart-form.model';
import { SmartGroup } from './dynamic-forms/smart-group/SmartGroup';

let mockData = item;

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
      <AppBar className="app-bar" position="relative" color="secondary">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Usewear
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <SmartGroupController fields={generalInfoOfItemFields} data={mockData.generalInfoOfItem} onChange={(groupIndex: number, changedGroup: GroupData) => onGroupsChange(item.generalInfoOfItem, groupIndex, changedGroup)}></SmartGroupController>
        </Grid>
        <Grid item md={4} xs={12}>
          <SmartGroup fields={generalInfoFields} groupData={item.generalInfo} onGroupChange={generalInfo => mockData.generalInfo = { ...mockData.generalInfo, ...generalInfo }}></SmartGroup>
        </Grid>
        <Grid item md={4} xs={12}>
          <SmartGroup fields={root} groupData={mockData} onGroupChange={onItemRootUpdate} />
        </Grid>

      </Grid>
    </ThemeProvider>
  );

  function onGroupsChange(groups: GroupData[], groupIndex: number, changedGroup: GroupData) {
    groups[groupIndex] = changedGroup;
    console.log(mockData)
  }

  function onItemRootUpdate(updatedItem: GroupData) {
    mockData = {
      ...mockData,
      ...updatedItem,

    }
  }
}

export default App;
