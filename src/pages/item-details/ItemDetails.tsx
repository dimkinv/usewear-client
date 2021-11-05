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
import { Item } from "../../models/item/item.model";

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
                    <SmartGroupController title="General Info of Item" fields={generalInfoOfItemFields} data={selectedItem.generalInfoOfItem} onChange={groups => onGroupsChanged('generalInfoOfItem', groups)}></SmartGroupController>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SmartGroup title="General Info" standalone={true} fieldsMetadata={generalInfoFields} groupData={selectedItem.generalInfo} onGroupChange={group => onGroupsChanged('generalInfo', group)}></SmartGroup>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SmartGroup title="Main" standalone={true} fieldsMetadata={root} groupData={selectedItem as unknown as DynamicGroup} onGroupChange={onRootChanged} />
                </Grid>
            </GridContainer>

            <GridContainer container spacing={3}>
                <Grid item md={4} xs={12}>
                    <SmartGroupController title="Morphology of the Edge" fields={morphologyEdgefields} data={selectedItem.morphologyOfTheEdge} onChange={groups => onGroupsChanged('morphologyOfTheEdge', groups)}></SmartGroupController>
                </Grid>
            </GridContainer>

        </>
    )

    function onGroupsChanged(grouPropertyName: string, changedGroup: DynamicGroup | DynamicGroup[]) {
        const updatedItem: Item = {
            ...selectedItem!
        };

        updatedItem[grouPropertyName] = changedGroup;
        dispatch(setSelectedItem(updatedItem));
    }

    function onRootChanged(changedGroup: DynamicGroup){
        const updatedItem: Item = {
            ... selectedItem!,
            ...changedGroup as any // need to find a solution to this any 🤦
        }

        dispatch(setSelectedItem(updatedItem));
    }
}