import { Interpretation } from './interpretation.model';
import { Patina } from './patina.model';
import { Residue } from './residue.model';
import { Micro } from './micro.model';
import { Macro } from './macro.model';
export class Usewear {
    interpretation: Interpretation[];
    patina: Patina[];
    residue: Residue[];
    micro: Micro[];
    macro: Macro[];
    // TODO: check if postDepProcessCol is string[] or some kind of complex object
    postDepositionProcess: string[];
    remarks = '';   
    constructor() {
        this.interpretation = [];
        this.patina = [];
        this.residue = [];
        this.micro = [];
        this.macro = [];
        this.postDepositionProcess = [];
    }
}
