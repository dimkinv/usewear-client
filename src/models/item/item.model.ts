import { Usewear } from './usewear/usewear.model';
import { GeneralInfoItem } from './general-info-item.model';
import { MorphologyEdge } from './morphology-edge.model';
import { ExperimentalData } from './exprimental-data.model';
import { GeneralInfo } from './general-info.model';
import { Preservation } from './preservation.model';

export class Item {
    _id: string = '';
    date = '';
    number = '';
    group = '';
    knapper = '';
    workingEdges: string | null = null;
    itemType: 'arch' | 'exp' | null = null;
    site = '';
    place = '';
    area = '';
    layers = '';
    locus = '';
    sq = '';
    sqN = '';
    subSq = '';
    hMax = '';
    hMin = '';
    remarks = '';
    usewear = new Usewear();
    graphics: string[];
    generalInfoOfItem: GeneralInfoItem[];
    morphologyOfTheEdge: MorphologyEdge[];
    experimentalData: ExperimentalData[];
    generalInfo: GeneralInfo;
    preservation: Preservation;

    constructor() {
        this.generalInfo = new GeneralInfo();
        this.generalInfoOfItem = [];
        this.morphologyOfTheEdge = [];
        this.experimentalData = [];
        this.graphics = [];
        this.preservation = new Preservation();
    }
}
