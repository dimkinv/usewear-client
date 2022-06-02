import { useEffect, useState } from "react";
import { IconName } from "../store/main/icon-name";

export interface DialAction {
  iconName: IconName;
  color?: 'primary' | 'error',
  tooltip: string;
  action: () => void;
}

const defaultDialButtons: DialAction[] = [
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
];

let setters: React.Dispatch<React.SetStateAction<DialAction[]>>[] = [];
const state = defaultDialButtons;

function updateState(newButtons: DialAction[]) {
  setters.forEach(setter => setter(newButtons));
}

export function useDialConfig(): [DialAction[], (buttonsConfig: DialAction[]) => void] {
  const [dialButtons, setDialButtons] = useState(state)
  useEffect(() => {
    setters.push(setDialButtons);

    return ()=>{
      updateState(defaultDialButtons);
      setters = setters.filter(setter => setter !== setDialButtons);
    }
  }, []);
  return [dialButtons, updateState]
}