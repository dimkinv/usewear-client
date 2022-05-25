import { FormFieldMetadata, SmartInputType } from "../../../dynamic-forms/smart-form.model";

export const generalInfoOfItemFields: FormFieldMetadata[] = [
    {
        inputType: SmartInputType.text,
        label: 'Name',
        propertyName: 'name',
    },
    {
        inputType: SmartInputType.text,
        label: 'Raw Material',
        propertyName: 'rawMaterial',
    },
    {
        inputType: SmartInputType.select,
        label: 'Typology',
        propertyName: 'typology',
    },
    {
        inputType: SmartInputType.text,
        label: 'Type',
        propertyName: 'type',
    },
    {
        inputType: SmartInputType.text,
        label: 'Bulb',
        propertyName: 'bulb',
    },
    {
        inputType: SmartInputType.text,
        label: 'Striking Platform',
        propertyName: 'strikingPlatform',
    },
    {
        inputType: SmartInputType.text,
        label: 'Retouch',
        propertyName: 'retouch',
    },
    {
        inputType: SmartInputType.text,
        label: 'Max Length',
        propertyName: 'maxL',
    },
    {
        inputType: SmartInputType.text,
        label: 'Max Width',
        propertyName: 'maxW',
    },
    {
        inputType: SmartInputType.text,
        label: 'Max Thickness',
        propertyName: 'maxT',
    },
    {
        inputType: SmartInputType.text,
        label: 'Raw Material Quality',
        propertyName: 'rawMaterialQuality',
    },
    {
        inputType: SmartInputType.text,
        label: 'Raw Material Coloe',
        propertyName: 'rawMaterialColor',
    },
    {
        inputType: SmartInputType.text,
        label: 'Amount of Cortex',
        propertyName: 'amountOfCortex',
    },
    {
        inputType: SmartInputType.text,
        label: 'Retouch Location',
        propertyName: 'retouchLocation',
    },
    {
        inputType: SmartInputType.text,
        label: 'Retouch Long',
        propertyName: 'retouchLong',
    },
    {
        inputType: SmartInputType.text,
        label: 'Broken Complete',
        propertyName: 'brokenComplete',
    },
]