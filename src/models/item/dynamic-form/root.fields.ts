import { FormFieldMetadata, SmartInputType } from '../../../dynamic-forms/smart-form.model';

export const root: FormFieldMetadata[] = [

    {
        inputType: SmartInputType.text,
        label: 'Site',
        propertyName: 'site',
    },
    {
        inputType: SmartInputType.text,
        label: 'Place',
        propertyName: 'place',
    },
    {
        inputType: SmartInputType.text,
        label: 'Area',
        propertyName: 'area',
    }
]