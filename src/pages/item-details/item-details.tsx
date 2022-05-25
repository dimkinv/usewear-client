import Grid from "@mui/material/Grid";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router";
import { DynamicGroup } from "../../dynamic-forms/dynamic-forms-types";
import { SmartGroupControllerAccordion } from "../../dynamic-forms/smart-group-controller/SmartGroupsControllerAccordion";
import { SmartGroupAccordion } from "../../dynamic-forms/smart-group/SmartGroupAccordion";
import { generalInfoOfItemFields, generalInfoFields, root, preservationFields } from "../../models/item/dynamic-form";
import { morphologyEdgefields } from "../../models/item/dynamic-form/morphology-edge.fields";
import { fetchItemByIdThunk, updateItemThunk } from "../../store/items/items.thunks";
import { typedUseDispatch, typedUseSelector } from "../../store/store";
import { Item } from "../../models/item/item.model";
import { experimentalDataFileds } from "../../models/item/dynamic-form/experimental-data.fileds";
import { setPageTitle } from "../../store/main/main.slice";
import { SpeedDial, SpeedDialAction, SpeedDialIcon, Tab, Tabs } from "@mui/material";
import { Cancel, Save } from '@mui/icons-material';


export const ItemDetailsPage: React.FC = () => {
  const dispatch = typedUseDispatch();
  const history = useHistory();

  const selectedItem = typedUseSelector(state => state.itemsStore.selectedItem);
  const modifiedItem = useRef<Item | null>(selectedItem);

  const { id } = useParams<{ id: string }>();

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

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
      <Tabs value={selectedTabIndex} onChange={(_, tabIndex) => setSelectedTabIndex(tabIndex)} aria-label="basic tabs example">
        <Tab label="Item Details" />
        <Tab label="Usewear" />
      </Tabs>
      <TabContainer tabIndex={0} currentIndex={selectedTabIndex}>
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <SmartGroupControllerAccordion title="General Info of Item" fields={generalInfoOfItemFields} data={modifiedItem.current.generalInfoOfItem} onChange={groups => onGroupsChanged('generalInfoOfItem', groups)}></SmartGroupControllerAccordion>
            <SmartGroupControllerAccordion title="Morphology of the Edge" fields={morphologyEdgefields} data={modifiedItem.current.morphologyOfTheEdge} onChange={groups => onGroupsChanged('morphologyOfTheEdge', groups)}></SmartGroupControllerAccordion>
          </Grid>
          <Grid item md={4} xs={12}>
            <SmartGroupAccordion title="General Info" standalone={true} fieldsMetadata={generalInfoFields} groupData={modifiedItem.current.generalInfo} onGroupChange={group => onGroupsChanged('generalInfo', group)}></SmartGroupAccordion>
            <SmartGroupControllerAccordion title="Experimental Data" fields={experimentalDataFileds} data={modifiedItem.current.experimentalData} onChange={groups => onGroupsChanged('experimentalData', groups)}></SmartGroupControllerAccordion>
          </Grid>
          <Grid item md={4} xs={12}>
            <SmartGroupAccordion title="Main" standalone={true} fieldsMetadata={root} groupData={modifiedItem.current as unknown as DynamicGroup} onGroupChange={onRootChanged} />
            <SmartGroupAccordion title="Preservation" standalone={true} fieldsMetadata={preservationFields} groupData={modifiedItem.current.preservation} onGroupChange={group => onGroupsChanged('preservation', group)} />
          </Grid>
        </Grid>
      </TabContainer>
      <TabContainer tabIndex={1} currentIndex={selectedTabIndex}>
      </TabContainer>
      <SpeedDial
        ariaLabel="menu"
        sx={{ position: 'fixed', bottom: 32, right: 32 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction icon={<Cancel color="error" fontSize="small" />} tooltipTitle="Discard" onClick={() => history.goBack()} />
        <SpeedDialAction onClick={saveOrUpdateItem} icon={<Save color="primary" fontSize="medium" />} tooltipTitle="Save Item" />
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
    if (!modifiedItem.current) {
      return;
    }

    modifiedItem.current = {
      ...modifiedItem.current,
      ...changedGroup
    };
  }

  function saveOrUpdateItem() {
    if (!modifiedItem.current) {
      return;
    }

    dispatch(updateItemThunk(modifiedItem.current));
  }
}

const TabContainer: React.FC<{ tabIndex: number, currentIndex: number }> = (props) => {
  const { tabIndex, currentIndex, children } = props;
  return (
    <div role="tabpanel" hidden={tabIndex !== currentIndex}>
      {children}
    </div>
  )
} 