export class Interpretation {
    name = '';
    _id = '';
    naturalFactors: string[];
    pdsm: string[];
    workedMaterial: string[];
    workedMaterialType: string[];

    constructor() {
        this.naturalFactors = [];
        this.pdsm = [];
        this.workedMaterial = [];
        this.workedMaterialType = [];
    }
}
