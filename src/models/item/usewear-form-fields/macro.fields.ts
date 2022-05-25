import { FormFieldMetadata, SmartInputType } from "../../../dynamic-forms/smart-form.model";

export const usewearMacroFields: FormFieldMetadata[] = [
  {
    inputType: SmartInputType.text,
    label: 'Name',
    propertyName: 'name'
  },
  {
    inputType: SmartInputType.text,
    label: 'Location',
    propertyName: 'location'
  },
  {
    inputType: SmartInputType.text,
    label: 'Direction',
    propertyName: 'direction'
  },
  {
    inputType: SmartInputType.text,
    label: 'Distinct',
    propertyName: 'distinct'
  },
  {
    inputType: SmartInputType.text,
    label: 'Initiation',
    propertyName: 'initiation'
  },
  {
    inputType: SmartInputType.text,
    label: 'Termination',
    propertyName: 'termination'
  },
  {
    inputType: SmartInputType.text,
    label: 'Rounding Degree',
    propertyName: 'roundingDegree'
  },
];