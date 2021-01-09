export interface FormField{
    propertyName: string;
    value?: string | string[];
    label:string;
    placeholder?: string;
    inputType: SmartInputType,
    options?: string[]
}

export enum SmartInputType {
    text = 'text',
    select = 'select',
    multi_select = 'multi_select',
    date = 'date'
  }