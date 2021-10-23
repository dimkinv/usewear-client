export class Residue {
    _id = '';
    residueLocation: string[];
    interpretation: string[];
    identTechnic: string[];

    constructor() {
        this.residueLocation = [];
        this.interpretation = [];
        this.identTechnic = [];
    }
}
