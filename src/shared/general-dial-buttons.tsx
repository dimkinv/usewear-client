import { IconName } from "../store/main/icon-name";
import { DialAction } from "./use-dial-config";

export const generalDialButtons: DialAction[] = [
  {
    iconName: IconName.Science,
    action: () => { },
    tooltip: 'Add exprimental Item'
  },
  {
    iconName: IconName.Castle,
    action: () => { },
    tooltip: 'Add archaeological Item'
  }
]