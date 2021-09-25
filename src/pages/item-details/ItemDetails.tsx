import Grid from "@mui/material/Grid";
import React from "react";
import { generalInfoOfItemFields, item, generalInfoFields, root } from "../../dynamic-forms/example-item";
import { GroupData } from "../../dynamic-forms/smart-form.model";
import { SmartGroupController } from "../../dynamic-forms/smart-group-controller/SmartGroupsController";
import { SmartGroup } from "../../dynamic-forms/smart-group/SmartGroup";

let mockData = item;

export const ItemDetailsPage: React.FC = () => {
    return (
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
    )
}

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