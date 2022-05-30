import { SpeedDial, SpeedDialIcon, SpeedDialAction, Icon } from "@mui/material";
import React from "react";
import { typedUseSelector } from "../store/store";

export const Dial: React.FC = () => {
  const speedDialActions = typedUseSelector(state => state.mainStore.speedDialActions);
  return (
    speedDialActions && <SpeedDial
      ariaLabel="menu"
      sx={{ position: 'fixed', bottom: 32, right: 32 }}
      icon={<SpeedDialIcon />}
    >
      {speedDialActions.map(button => <SpeedDialAction icon={<Icon color={button.color ?? 'primary'}>{button.iconName}</Icon>} tooltipTitle={button.tooltip} onClick={button.action} />)}
    </SpeedDial>

  )
}