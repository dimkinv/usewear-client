import { FormFieldMetadata, SmartInputType } from "../../../dynamic-forms/smart-form.model";

export const usewearPatinaFields: FormFieldMetadata[] = [
  {
    inputType: SmartInputType.text,
    label: 'Name',
    propertyName: 'name'
  },
  {
    inputType: SmartInputType.text,
    label: 'Patina Face',
    propertyName: 'patinaFace'
  },
  {
    inputType: SmartInputType.text,
    label: 'Patina Location',
    propertyName: 'patinaLocation'
  },
  {
    inputType: SmartInputType.text,
    label: 'Patina Type',
    propertyName: 'patinaType'
  },
  {
    inputType: SmartInputType.text,
    label: 'Holes',
    propertyName: 'holes'
  },
  {
    inputType: SmartInputType.text,
    label: 'Spots Points',
    propertyName: 'spotsPoints'
  },
  {
    inputType: SmartInputType.text,
    label: 'Spots Points Color',
    propertyName: 'spotsPointsColor'
  }
];