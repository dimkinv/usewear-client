import Grid from "@mui/material/Grid";
import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { DynamicGroup } from "../../dynamic-forms/dynamic-forms-types";
import { generalInfoOfItemFields, item, generalInfoFields, root } from "../../dynamic-forms/example-item";
import { GroupData } from "../../dynamic-forms/smart-form.model";
import { SmartGroupController } from "../../dynamic-forms/smart-group-controller/SmartGroupsController";
import { SmartGroup } from "../../dynamic-forms/smart-group/SmartGroup";
import { fetchItemByIdThunk } from "../../store/items.thunks";
import { typedUseSelector } from "../../store/store";

let mockData = item;

export const ItemDetailsPage: React.FC = () => {
    const selectedItem = typedUseSelector(state => state.itemsStore.selectedItem);
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();

    if (!selectedItem) {
        dispatch(fetchItemByIdThunk(id));
    }

    return (
        <>
            {selectedItem && <Grid container spacing={3}>
                <Grid item md={4} xs={12}>
                    <SmartGroupController fields={generalInfoOfItemFields} data={selectedItem.generalInfoOfItem as unknown as DynamicGroup[]} onChange={(groupIndex: number, changedGroup: GroupData) => onGroupsChange(item.generalInfoOfItem, groupIndex, changedGroup)}></SmartGroupController>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SmartGroup fieldsMetadata={generalInfoFields} groupData={selectedItem.generalInfo as unknown as DynamicGroup} onGroupChange={generalInfo => mockData.generalInfo = { ...mockData.generalInfo, ...generalInfo }}></SmartGroup>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SmartGroup fieldsMetadata={root} groupData={selectedItem as unknown as DynamicGroup} onGroupChange={onItemRootUpdate} />
                </Grid>
            </Grid>
            }
        </>
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