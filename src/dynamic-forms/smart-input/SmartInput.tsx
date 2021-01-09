import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import React, { PropsWithChildren, useState } from 'react';
import { MultiSelect } from './MultiSelect';

export interface SmartInputProps {
  inputType: SmartInputType
  label: string;
  placeholder?: string;
  id: string;
  value?: string | string[];
  options?: string[];
  onChange?: (newValue: unknown) => void;
}

export enum SmartInputType {
  text = 'text',
  select = 'select',
  multi_select = 'multi_select',
  date = 'date'
}

export const SmartInput: React.FC<SmartInputProps> = (props: PropsWithChildren<SmartInputProps>) => {
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPersonName(event.target.value as string[]);
  };
  validateSelect(props);

  return (
    <div>
      {renderComponent(props, personName, handleChange)}
    </div>
  );
}

function validateSelect(props: React.PropsWithChildren<SmartInputProps>) {
  if (props.inputType === SmartInputType.select || props.inputType === SmartInputType.multi_select) {
    if (!props.options || !(props.options instanceof Array)) {
      throw new Error('Invalid value for multi_select, did you forget to pass string[] type as value?');
    }
  }
}

function renderComponent(props: PropsWithChildren<SmartInputProps>, personName: any, handleChange: any) {
  const uniqueControlId = `${props.id}_${Math.floor(Math.random() * 1000)}`;

  switch (props.inputType) {
    case SmartInputType.text:
      return <FormControl>
        <TextField
          id={uniqueControlId}
          fullWidth
          label={props.label}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </FormControl>
    case SmartInputType.select:
      return <FormControl fullWidth>
        <InputLabel id={`label_${uniqueControlId}`}>{props.label}</InputLabel>
        <Select
          fullWidth
          labelId={`label_${uniqueControlId}`}
          id={uniqueControlId}
          value={10}
        >
          {props.options?.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    case SmartInputType.multi_select:
      return <MultiSelect options={props.options!} id={uniqueControlId} />
  }
}