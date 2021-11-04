import { FormFieldMetadata, SmartInputType } from "../../../dynamic-forms/smart-form.model";

export const generalInfoFields: FormFieldMetadata[] = [
    {
        inputType: SmartInputType.text,
        label: 'Name',
        propertyName: 'name',
    },
    {
        inputType: SmartInputType.text,
        label: 'Date',
        propertyName: 'date',
    },
    {
        inputType: SmartInputType.text,
        label: 'Place',
        propertyName: 'place',
    },
    {
        inputType: SmartInputType.text,
        label: 'User',
        propertyName: 'user',
    }
];