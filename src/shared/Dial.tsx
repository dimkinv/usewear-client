import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";
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
      {speedDialActions.map(button => <SpeedDialAction icon={button.icon} tooltipTitle={button.tooltip} onClick={button.action} />)}
    </SpeedDial>

  )
}