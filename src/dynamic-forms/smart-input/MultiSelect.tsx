import { FormControl, InputLabel, Chip, Select, MenuItem, makeStyles } from "@material-ui/core";
import { useState } from "react";

export interface MultiSelectProps {
  options: string[];
  id: string;
}

const useStyles = makeStyles({
  chip: {
    margin: 2
  },
  chipWrapper: { display: 'flex', flexWrap: 'wrap' }
});

export const MultiSelect: React.FC<MultiSelectProps> = (props) => {
  const [values, setValues] = useState<string[]>([]);
  const classes = useStyles();

  return (
    <FormControl fullWidth>
      <InputLabel id={`label_${props.id}`}>Chip</InputLabel>
      <Select
        labelId={`label_${props.id}`}
        id={props.id}
        multiple
        value={values}
        onChange={event => setValues(event.target.value as string[])}
        renderValue={renderValues}
      >
        {props.options.map((value) => (
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