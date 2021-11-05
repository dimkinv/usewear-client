export interface FormFieldMetadata{
    propertyName: string;
    label:string;
    placeholder?: string;
    inputType: SmartInputType,
}

export enum SmartInputType {
    text = 'text',
    select = 'select',
    multi_select = 'multi_select',
    date = 'date'
  }

export interface GroupData{
    [id:string]: unknown;
}