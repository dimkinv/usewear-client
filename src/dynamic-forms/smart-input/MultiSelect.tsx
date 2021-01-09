import { FormControl, InputLabel, Chip, Select, MenuItem, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { SmartInputProps } from "./SmartInput";

export interface MultiSelectProps {
  smartInputProps: SmartInputProps
}

const useStyles = makeStyles({
  chip: {
    margin: 2
  },
  chipWrapper: { display: 'flex', flexWrap: 'wrap' }
});

export const MultiSelect: React.FC<MultiSelectProps> = (props) => {
  const {smartInputProps} = props
  const classes = useStyles();
  
  return (
    <FormControl fullWidth>
      <InputLabel id={`label_${smartInputProps.id}`}>Chip</InputLabel>
      <Select
        labelId={`label_${smartInputProps.id}`}
        id={smartInputProps.id}
        multiple
        value={smartInputProps.value}
        onChange={event => smartInputProps.onChange(smartInputProps.propertyName, event.target.value as string[])}
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
      <div className={classes.chipWrapper}>
        {values?.map(selectedValue => {
          return <Chip className={classes.chip} key={selectedValue} label={selectedValue} />
        })}
      </div>
    )
  }
}