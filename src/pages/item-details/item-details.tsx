import Grid from "@mui/material/Grid";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DynamicGroup } from "../../dynamic-forms/dynamic-forms-types";
import { generalInfoOfItemFields, generalInfoFields, root, preservationFields } from "../../models/item/item-details-form-fields";
import { morphologyEdgefields } from "../../models/item/item-details-form-fields/morphology-edge.fields";
import { fetchItemByIdThunk, updateItemThunk } from "../../store/items/items.thunks";
import { typedUseDispatch, typedUseSelector } from "../../store/store";
import { Item } from "../../models/item/item.model";
import { experimentalDataFileds } from "../../models/item/item-details-form-fields/experimental-data.fileds";
import { setPageTitle, setSpeedDialButtons } from "../../store/main/main.slice";
import { Tab, Tabs } from "@mui/material";
import { Cancel, Save } from '@mui/icons-material';
import { SmartGroupController } from "../../dynamic-forms/smart-group-controller/SmartGroupsController";
import { usewearMacroFields } from "../../models/item/usewear-form-fields/macro.fields";
import { SmartGroup } from "../../dynamic-forms/smart-group/SmartGroup";
import styled from "styled-components";
import { usewearPatinaFields } from "../../models/item/usewear-form-fields/patina.fields";
import { usewearMicroFields } from "../../models/item/usewear-form-fields/micro.fields";
import { usewearResidueFields } from "../../models/item/usewear-form-fields/residue.fields";

const GridChildrenBottomMargin = styled(Grid)`
> * {
  margin-bottom: 20px;
}
`

export const ItemDetailsPage: React.FC = () => {
  const dispatch = typedUseDispatch();
  const navigation = useNavigate();

  const selectedItem = typedUseSelector(state => state.itemsStore.selectedItem);
  const modifiedItem = useRef<Item | null>(selectedItem);

  const { id } = useParams<{ id: string }>();

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  useEffect(() => {
    async function initialEffect() {
      if (!selectedItem && id) {
        const item = await dispatch(fetchItemByIdThunk(id)).unwrap();
        modifiedItem.current = item;

      }
      dispatch(setPageTitle(`Usewear - Experimental Item ${selectedItem ? selectedItem['number'] : '???'}`));
    }

    initialEffect();
  }, [dispatch, id, selectedItem]);

  useEffect(() => {
    dispatch(setSpeedDialButtons([
      {
        icon: <Cancel color="error" fontSize="small" />,
        tooltip: 'Discard changes',
        action: () => navigation(-1)
      },
      {
        icon: <Save color="primary" fontSize="medium" />,
        tooltip: 'Save item',
        action: saveOrUpdateItem
      }
    ]))

    return ()=>{
      dispatch(setSpeedDialButtons(null));
    }
  }, [])

  return (modifiedItem.current &&
    <>
      <Tabs value={selectedTabIndex} onChange={(_, tabIndex) => setSelectedTabIndex(tabIndex)} aria-label="basic tabs example">
        <Tab label="Item Details" />
        <Tab label="Usewear" />
      </Tabs>
      <TabContainer tabIndex={0} currentIndex={selectedTabIndex}>
        <Grid container columnSpacing={3}>
          <GridChildrenBottomMargin item md={4} xs={12}>
            <SmartGroupController title="General Info of Item" fields={generalInfoOfItemFields} data={modifiedItem.current.generalInfoOfItem} onChange={groups => onGroupsChanged('generalInfoOfItem', groups)} />
          </GridChildrenBottomMargin>
          <GridChildrenBottomMargin item md={4} xs={12}>
            <SmartGroup title="General Info" standalone={true} fieldsMetadata={generalInfoFields} groupData={modifiedItem.current.generalInfo} onGroupChange={group => onGroupsChanged('generalInfo', group)} />
            <SmartGroupController title="Experimental Data" fields={experimentalDataFileds} data={modifiedItem.current.experimentalData} onChange={groups => onGroupsChanged('experimentalData', groups)} />
          </GridChildrenBottomMargin>
          <GridChildrenBottomMargin item md={4} xs={12}>
            <SmartGroup title="Main" standalone={true} fieldsMetadata={root} groupData={modifiedItem.current as unknown as DynamicGroup} onGroupChange={onRootChanged} />
            <SmartGroup title="Preservation" standalone={true} fieldsMetadata={preservationFields} groupData={modifiedItem.current.preservation} onGroupChange={group => onGroupsChanged('preservation', group)} />
            <SmartGroupController title="Morphology of the Edge" fields={morphologyEdgefields} data={modifiedItem.current.morphologyOfTheEdge} onChange={groups => onGroupsChanged('morphologyOfTheEdge', groups)} />
          </GridChildrenBottomMargin>
        </Grid>
      </TabContainer>
      <TabContainer tabIndex={1} currentIndex={selectedTabIndex}>
        <Grid container spacing={3}>
          <GridChildrenBottomMargin item md={4} xs={12}>
            <SmartGroupController title="Macro" fields={usewearMacroFields} data={modifiedItem.current.usewear.macro} onChange={groups => onUsewearGroupsChanged('macro', groups)} />
            <SmartGroupController title="Micro" fields={usewearMicroFields} data={modifiedItem.current.usewear.micro} onChange={groups => onUsewearGroupsChanged('micro', groups)} />
          </GridChildrenBottomMargin>
          <GridChildrenBottomMargin item md={4} xs={12}>
            <SmartGroupController title="Patina" fields={usewearPatinaFields} data={modifiedItem.current.usewear.patina} onChange={groups => onUsewearGroupsChanged('patina', groups)} />
            <SmartGroupController title="Residue" fields={usewearResidueFields} data={modifiedItem.current.usewear.residue} onChange={groups => onUsewearGroupsChanged('residue', groups)} />
          </GridChildrenBottomMargin>
          {/* <GridChildrenBottomMargin item md={4} xs={12}>
            <SmartGroupController title="Patina" fields={usewearPatinaFields} data={modifiedItem.current.usewear.patina} onChange={groups => onUsewearGroupsChanged('patina', groups)} />
            <SmartGroupController title="Residue" fields={usewearResidueFields} data={modifiedItem.current.usewear.residue} onChange={groups => onUsewearGroupsChanged('residue', groups)} />
          </GridChildrenBottomMargin> */}
        </Grid>
      </TabContainer>
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

  function onUsewearGroupsChanged(grouPropertyName: string, changedGroup: DynamicGroup | DynamicGroup[]) {
    if (!modifiedItem.current?.usewear) {
      return;
    }
    modifiedItem.current.usewear = {
      ...modifiedItem.current.usewear,
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