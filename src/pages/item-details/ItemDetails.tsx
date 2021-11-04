import Grid from "@mui/material/Grid";
import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { DynamicGroup } from "../../dynamic-forms/dynamic-forms-types";
import { GroupData } from "../../dynamic-forms/smart-form.model";
import { SmartGroupController } from "../../dynamic-forms/smart-group-controller/SmartGroupsController";
import { SmartGroup } from "../../dynamic-forms/smart-group/SmartGroup";
import { generalInfoOfItemFields, generalInfoFields, root } from "../../models/item/dynamic-form";
import { morphologyEdgefields } from "../../models/item/dynamic-form/morphology-edge.fields";
import { setSelectedItem } from "../../store/items/items.slice";
import { fetchItemByIdThunk } from "../../store/items/items.thunks";
import { typedUseSelector } from "../../store/store";
import styled from 'styled-components';

const GridContainer = styled(Grid)`
    margin-top: 10px;
`



export const ItemDetailsPage: React.FC = () => {
    const selectedItem = typedUseSelector(state => state.itemsStore.selectedItem);
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();

    if (!selectedItem) {
        dispatch(fetchItemByIdThunk(id));
    }

    return (selectedItem &&
        <>
            <GridContainer container spacing={3}>
                <Grid item md={4} xs={12}>
                    <SmartGroupController title="General Info of Item" fields={generalInfoOfItemFields} data={selectedItem.generalInfoOfItem as unknown as DynamicGroup[]} onChange={(groupIndex: number, changedGroup: GroupData) => onGroupsChange(selectedItem.generalInfoOfItem as unknown as DynamicGroup[], groupIndex, changedGroup)}></SmartGroupController>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SmartGroup title="General Info" standalone={true} fieldsMetadata={generalInfoFields} groupData={selectedItem.generalInfo as unknown as DynamicGroup} onGroupChange={generalInfo => selectedItem.generalInfo = { ...selectedItem.generalInfo, ...generalInfo }}></SmartGroup>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SmartGroup title="Main" standalone={true} fieldsMetadata={root} groupData={selectedItem as unknown as DynamicGroup} onGroupChange={onItemRootUpdate} />
                </Grid>
            </GridContainer>

            <GridContainer container spacing={3}>
                <Grid item md={4} xs={12}>
                    <SmartGroupController title="Morphology of the Edge" fields={morphologyEdgefields} data={selectedItem.morphologyOfTheEdge as unknown as DynamicGroup[]} onChange={(groupIndex: number, changedGroup: GroupData) => onGroupsChange(selectedItem.generalInfoOfItem as unknown as DynamicGroup[], groupIndex, changedGroup)}></SmartGroupController>
                </Grid>
            </GridContainer>

        </>
    )

    function onGroupsChange(groups: GroupData[], groupIndex: number, changedGroup: GroupData) {
        groups[groupIndex] = changedGroup;
    }

    function onItemRootUpdate(updatedItem: GroupData) {
        if (!selectedItem) {
            return;
        }

        dispatch(setSelectedItem({
            ...selectedItem,
            ...updatedItem
        }));

    }
}