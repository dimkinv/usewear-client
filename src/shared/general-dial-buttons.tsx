import { Science } from "@mui/icons-material";
// import CastleIcon from '@mui/icons-material/Castle';
import { DialAction } from "../store/main/main.slice";

export const generalDialButtons: DialAction[] = [
  {
    icon: <Science />,
    action: () => { },
    tooltip: 'Add exprimental Item'
  },
  // {
  //   icon: <CastleIcon />,
  //   action: () => { },
  //   tooltip: 'Add archaeological Item'
  // }
]