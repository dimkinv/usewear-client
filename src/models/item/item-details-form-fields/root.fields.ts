import { FormFieldMetadata, SmartInputType } from '../../../dynamic-forms/smart-form.model';

export const root: FormFieldMetadata[] = [

    {
        inputType: SmartInputType.text,
        label: 'Number',
        propertyName: 'number',
    },
    {
        inputType: SmartInputType.text,
        label: 'Group',
        propertyName: 'group',
    },
    {
        inputType: SmartInputType.text,
        label: 'Knapper',
        propertyName: 'knapper',
    },
]

// date = '';
// number = '';
// group = '';
// knapper = '';
// workingEdges: string | null = null;
// itemType: 'arch' | 'exp' | null = null;
// site = '';
// place = '';
// area = '';
// layers = '';
// locus = '';
// sq = '';
// sqN = '';
// subSq = '';
// hMax = '';
// hMin = '';
// remarks = '';