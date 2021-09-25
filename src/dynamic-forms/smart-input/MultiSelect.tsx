import { FormControl, InputLabel, Select, MenuItem, Chip } from "@mui/material";
import { SmartInputProps } from "./SmartInput";

export interface MultiSelectProps {
  smartInputProps: SmartInputProps
}


export const MultiSelect: React.FC<MultiSelectProps> = (props) => {
  const {smartInputProps} = props;
  
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
        {smartInputProps.options?.map((value) => (
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