import { SpeedDial, SpeedDialIcon, SpeedDialAction, Icon } from "@mui/material";
import React from "react";
import { useDialConfig } from "./use-dial-config";

export const Dial: React.FC = () => {
  const [buttonsState] = useDialConfig();
  return (
    <SpeedDial
      ariaLabel="menu"
      sx={{ position: 'fixed', bottom: 32, right: 32 }}
      icon={<SpeedDialIcon />}
    >
      {buttonsState.map(button => <SpeedDialAction key={button.iconName} icon={<Icon color={button.color ?? 'primary'}>{button.iconName}</Icon>} tooltipTitle={button.tooltip} onClick={button.action} />)}
    </SpeedDial>

  )
}