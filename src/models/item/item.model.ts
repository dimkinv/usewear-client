import { Usewear } from './usewear.model';
import { DynamicGroup } from '../../dynamic-forms/dynamic-forms-types';

export interface Item {
    [id: string]: DynamicGroup | DynamicGroup[] | string;
    generalInfoOfItem: DynamicGroup[];
    morphologyOfTheEdge: DynamicGroup[];
    experimentalData: DynamicGroup[];
    generalInfo: DynamicGroup;
    preservation: DynamicGroup;
}
