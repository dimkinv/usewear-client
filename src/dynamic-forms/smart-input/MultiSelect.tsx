import { FormControl, InputLabel, Select, MenuItem, Chip } from "@mui/material";
import { useState } from "react";
import { typedUseSelector } from "../../store/store";
import { SmartInputType } from "../smart-form.model";
import { SmartInputProps } from "./SmartInput";

export interface MultiSelectProps {
  smartInputProps: SmartInputProps
}


export const MultiSelect: React.FC<MultiSelectProps> = (props) => {
  const {smartInputProps} = props;
  
  const [options, setOptions] = useState<string[]>([])

  if(props.smartInputProps.inputType === SmartInputType.multi_select){
    const currentSelectOptions = typedUseSelector(state => state.itemsStore.listOptions[props.smartInputProps.propertyName]);
    setOptions(currentSelectOptions);
  }

  return (
    <FormControl fullWidth>
      <InputLabel id={`label_${smartInputProps.id}`}>Chip</InputLabel>
      <Select
        labelId={`label_${smartInputProps.id}`}
        id={smartInputProps.id}
        multiple
        value={smartInputProps.value}
        onChange={event => smartInputProps.onFieldChange(smartInputProps.propertyName, event.target.value as string[])}
        renderValue={renderValues}
      >
        {options.map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )

  function renderValues(selectedValues: unknown) {
    const values = selectedValues as string[];
    return (
      <div className="chip-wrapper">
        {values?.map(selectedValue => {
          return <Chip className="chip" key={selectedValue} label={selectedValue} />
        })}
      </div>
    )
  }
}