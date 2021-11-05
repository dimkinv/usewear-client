
import { FormFieldMetadata, SmartInputType } from "../../../dynamic-forms/smart-form.model";

export const preservationFields: FormFieldMetadata[] = [
    {
        propertyName: 'preservation',
        label: 'preservation',
        inputType: SmartInputType.text
    },
    {
        propertyName: 'patina',
        label: 'patina',
        inputType: SmartInputType.text
    },
    {
        propertyName: 'pFace',
        label: 'Preservation Face',
        inputType: SmartInputType.text
    },
    {
        propertyName: 'pColor',
        label: 'Preservation Color',
        inputType: SmartInputType.text
    },
];