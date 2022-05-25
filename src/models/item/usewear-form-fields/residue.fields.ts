import { FormFieldMetadata, SmartInputType } from "../../../dynamic-forms/smart-form.model";

export const usewearResidueFields: FormFieldMetadata[] = [
  {
    inputType: SmartInputType.text,
    label: 'Residue Location',
    propertyName: 'residueLocation'
  },
  {
    inputType: SmartInputType.text,
    label: 'Interpretation',
    propertyName: 'interpretation'
  },
  {
    inputType: SmartInputType.text,
    label: 'Ident Technic',
    propertyName: 'identTechnic'
  },
];