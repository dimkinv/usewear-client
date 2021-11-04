import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, { PropsWithChildren, useState } from 'react';
import { DynamicInputType } from '../dynamic-forms-types';
import { FormFieldMetadata, SmartInputType } from '../smart-form.model';
import { MultiSelect } from './MultiSelect';

export interface SmartInputProps extends FormFieldMetadata {
  id: string;
  value: DynamicInputType;
  onFieldChange: (fieldName: string, value: DynamicInputType) => void;
  className?: string;
}

export const SmartInput: React.FC<SmartInputProps> = (props: PropsWithChildren<SmartInputProps>) => {

  validateSelect(props);
  const [value, setValue] = useState(props.value ?? initializeValue(props.value, props.inputType));

  return (
    <div className={props.className}>
      {renderComponent(props)}
    </div>
  );

  function initializeValue(value: unknown, type: SmartInputType) {
    switch (type) {
      case SmartInputType.date:
        return new Date();
      case SmartInputType.text:
        return '';
      default:
        return [];
    }

  }

  function validateSelect(props: React.PropsWithChildren<SmartInputProps>) {
    if (props.inputType === SmartInputType.select || props.inputType === SmartInputType.multi_select) {
      if (!props.options || !(props.options instanceof Array)) {
        throw new Error('Invalid value for multi_select, did you forget to pass string[] type as value?');
      }
    }
  }

  function renderComponent(props: PropsWithChildren<SmartInputProps>) {
    const uniqueControlId = `${props.id}_${Math.floor(Math.random() * 1000)}`;

    switch (props.inputType) {
      case SmartInputType.text:
        return <FormControl fullWidth>
          <TextField
            id={uniqueControlId}
            label={props.label}
            value={value}
            placeholder={props.placeholder}
            onChange={onValueChange}
          />
        </FormControl>
      case SmartInputType.select:
        return <FormControl fullWidth>
          <InputLabel id={`label_${uniqueControlId}`}>{props.label}</InputLabel>
          <Select
            fullWidth
            placeholder={props.placeholder}
            labelId={`label_${uniqueControlId}`}
            id={uniqueControlId}
            value={props.value}
            onChange={onSelectChangeEvent}
          >
            {props.options?.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      case SmartInputType.multi_select:
        return <MultiSelect smartInputProps={props} />
    }
  }

  function onValueChange(element: React.ChangeEvent<{ value: DynamicInputType }>) {
    setValue(element.target.value);
    props.onFieldChange(props.propertyName, element.target.value);
  }

  function onSelectChangeEvent(event: SelectChangeEvent<DynamicInputType>){

  }
}