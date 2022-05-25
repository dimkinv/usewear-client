import { DynamicGroup, DynamicInputType } from '../../dynamic-forms/dynamic-forms-types';
import { Usewear } from './usewear.model';

export interface Item {
    [id: string]: DynamicGroup | DynamicGroup[] | DynamicInputType | any;
    generalInfoOfItem: DynamicGroup[];
    morphologyOfTheEdge: DynamicGroup[];
    experimentalData: DynamicGroup[];
    generalInfo: DynamicGroup;
    preservation: DynamicGroup;
    usewear: Usewear
}
