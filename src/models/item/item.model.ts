import { Usewear } from './usewear.model';
import { DynamicGroup, DynamicInputType } from '../../dynamic-forms/dynamic-forms-types';

export interface Item {
    [id: string]: DynamicGroup | DynamicGroup[] | DynamicInputType;
    generalInfoOfItem: DynamicGroup[];
    morphologyOfTheEdge: DynamicGroup[];
    experimentalData: DynamicGroup[];
    generalInfo: DynamicGroup;
    preservation: DynamicGroup;
}
