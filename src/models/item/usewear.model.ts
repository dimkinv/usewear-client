
import { DynamicGroup } from '../../dynamic-forms/dynamic-forms-types';
export interface Usewear {
    interpretation: DynamicGroup[];
    patina: DynamicGroup[];
    residue: DynamicGroup[];
    micro: DynamicGroup[];
    macro: DynamicGroup[];
    // TODO: check if postDepProcessCol is string[] or some kind of complex object
    postDepositionProcess: string[];
    remarks:string;
}
