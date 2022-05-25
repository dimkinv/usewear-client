import { FormFieldMetadata, SmartInputType } from "../../../dynamic-forms/smart-form.model";

export const generalInfoFields: FormFieldMetadata[] = [
    {
        inputType: SmartInputType.text,
        label: 'Name',
        propertyName: 'name',
    },
    {
        inputType: SmartInputType.text,
        label: 'Working Edges',
        propertyName: 'workingEdges',
    },
    {
        inputType: SmartInputType.text,
        label: 'Layers',
        propertyName: 'layers',
    },
    {
        inputType: SmartInputType.text,
        label: 'Locus',
        propertyName: 'locus',
    },
    {
        inputType: SmartInputType.text,
        label: 'Square',
        propertyName: 'square',
    },
    {
        inputType: SmartInputType.text,
        label: 'Square Number',
        propertyName: 'sqN',
    },
    {
        inputType: SmartInputType.text,
        label: 'Subsquare',
        propertyName: 'subSq',
    },
    {
        inputType: SmartInputType.text,
        label: 'Min Height',
        propertyName: 'hMin',
    },
    {
        inputType: SmartInputType.text,
        label: 'Max Height',
        propertyName: 'hMax',
    },
    {
        inputType: SmartInputType.text,
        label: 'Remarks',
        propertyName: 'remarks',
    }
];
