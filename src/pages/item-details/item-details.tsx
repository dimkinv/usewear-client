import Grid from "@mui/material/Grid";
import React, { useEffect, useRef } from "react";
import styled from 'styled-components';
import { useHistory, useParams } from "react-router";
import { DynamicGroup } from "../../dynamic-forms/dynamic-forms-types";
import { SmartGroupController } from "../../dynamic-forms/smart-group-controller/SmartGroupsController";
import { SmartGroup } from "../../dynamic-forms/smart-group/SmartGroup";
import { generalInfoOfItemFields, generalInfoFields, root, preservationFields } from "../../models/item/dynamic-form";
import { morphologyEdgefields } from "../../models/item/dynamic-form/morphology-edge.fields";
import { fetchItemByIdThunk } from "../../store/items/items.thunks";
import { typedUseDispatch, typedUseSelector } from "../../store/store";
import { Item } from "../../models/item/item.model";
import { experimentalDataFileds } from "../../models/item/dynamic-form/experimental-data.fileds";
import { setPageTitle } from "../../store/main/main.slice";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { Cancel, Save } from '@mui/icons-material';

const GridContainer = styled(Grid)`
    margin-top: 10px;
`


export const ItemDetailsPage: React.FC = () => {
    const dispatch = typedUseDispatch();
    const history = useHistory();

    const selectedItem = typedUseSelector(state => state.itemsStore.selectedItem);
    const modifiedItem = useRef<Item | null>(selectedItem);

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        async function initialEffect() {
            if (!selectedItem) {
                const item = await dispatch(fetchItemByIdThunk(id)).unwrap();
                modifiedItem.current = item;

            }
            dispatch(setPageTitle(`Usewear - Experimental Item ${selectedItem ? selectedItem['number'] : '???'}`));
        }

        initialEffect();
    }, [dispatch, id, selectedItem]);

    return (modifiedItem.current &&
        <>
            <GridContainer container spacing={3}>
                <Grid item md={4} xs={12}>
                    <SmartGroupController title="General Info of Item" fields={generalInfoOfItemFields} data={modifiedItem.current.generalInfoOfItem} onChange={groups => onGroupsChanged('generalInfoOfItem', groups)}></SmartGroupController>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SmartGroup title="General Info" standalone={true} fieldsMetadata={generalInfoFields} groupData={modifiedItem.current.generalInfo} onGroupChange={group => onGroupsChanged('generalInfo', group)}></SmartGroup>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SmartGroup title="Main" standalone={true} fieldsMetadata={root} groupData={modifiedItem.current as unknown as DynamicGroup} onGroupChange={onRootChanged} />
                </Grid>
            </GridContainer>

            <GridContainer container spacing={3}>
                <Grid item md={4} xs={12}>
                    <SmartGroupController title="Morphology of the Edge" fields={morphologyEdgefields} data={modifiedItem.current.morphologyOfTheEdge} onChange={groups => onGroupsChanged('morphologyOfTheEdge', groups)}></SmartGroupController>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SmartGroupController title="Experimental Data" fields={experimentalDataFileds} data={modifiedItem.current.experimentalData} onChange={groups => onGroupsChanged('experimentalData', groups)}></SmartGroupController>
                </Grid>
                <Grid item md={4} xs={12}>
                    <SmartGroup title="Preservation" standalone={true} fieldsMetadata={preservationFields} groupData={modifiedItem.current.preservation} onGroupChange={group => onGroupsChanged('preservation', group)} />
                </Grid>
            </GridContainer>

            <SpeedDial
                ariaLabel="menu"
                sx={{ position: 'fixed', bottom: 32, right: 32 }}
                icon={<SpeedDialIcon />}
            >
                <SpeedDialAction icon={<Cancel color="error" fontSize="small" />} tooltipTitle="Discard" onClick={() => history.goBack()} />
                <SpeedDialAction icon={<Save color="primary" fontSize="medium" />} tooltipTitle="Save Item" />
            </SpeedDial>
        </>
    )

    function onGroupsChanged(grouPropertyName: string, changedGroup: DynamicGroup | DynamicGroup[]) {
        if (!modifiedItem.current) {
            return;
        }
        modifiedItem.current = {
            ...modifiedItem.current,
            [grouPropertyName]: changedGroup
        };
    }

    function onRootChanged(changedGroup: DynamicGroup) {
        const updatedItem: Item = {
            ...selectedItem!,
            ...changedGroup
        }

        modifiedItem.current = updatedItem;
    }
}