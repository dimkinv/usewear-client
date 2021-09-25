import { FormField, SmartInputType } from "./smart-form.model";

export const item = {
    "_id": "5461e0463bdd6c020045c3c6",
    "number": "",
    "group": "",
    "knapper": "",
    "workingEdges": null,
    "itemType": "arch",
    "site": "Revadim",
    "place": "Israel",
    "area": "B",
    "layers": "B2",
    "locus": "21",
    "sq": "CJ",
    "sqN": "76",
    "subSq": "a - d",
    "itemN": "",
    "hMax": "69.10",
    "hMin": "69.05",
    "usewear": {
        "remarks": "הפטינה שנראית לעין היא שונה בשני הצדדים, אך המאפיינים שלה דומים. בפן הונטראלי ברק ונקודות לבנות מופיעות על בסיס צור אפור ובפן הדורסאלי הבסיס הוא חום בהיר (צהוב )",
        "postDepositionProcess": [],
        "interpretation": [
            {
                "name": "Working edge ",
                "naturalFactors": [],
                "pdsm": [
                    "chemical"
                ],
                "workedMaterial": [],
                "workedMaterialType": []
            }
        ],
        "macro": [
            {
                "name": "Working edge ",
                "location": null,
                "direction": null,
                "distinct": null,
                "initiation": null,
                "termination": null,
                "roundingDegree": null
            }
        ],
        "micro": [
            {
                "name": "Working edge ",
                "microEdgeRounding": null,
                "microStriations": null,
                "polishLocation": null,
                "polishExtension": null,
                "polishDistribution": null,
                "polishTexture": null,
                "polishLinkage": null,
                "polishTopology": null,
                "polishDirection": null
            }
        ],
        "patina": [
            {
                "name": "Working edge ",
                "patinaFace": "both",
                "patinaLocation": "middle part on ventral face",
                "patinaType": "medium sheen",
                "holes": "medium",
                "spotsPoints": true,
                "spotsPointsColor": "white quartzite"
            }
        ],
        "residue": [
            {
                "residueLocation": [],
                "interpretation": [],
                "identTechnic": []
            }
        ]
    },
    "graphics": [],
    "preservation": {
        "preservation": "slightly abraded",
        "patina": "yes",
        "pFace": "both",
        "pColor": "white",
        "doublePatina": "yes",
        "afterPatinaKnapping": "yes",
        "patinaOnAfterPatina": "yes"
    },
    "generalInfoOfItem": [
        {
            "name": "Working edge ",
            "rawMaterial": "Flint",
            "typology": "tool",
            "type": "varia",
            "bulb": "",
            "strikingPlatform": "",
            "retouch": "yes",
            "maxL": "22",
            "maxW": "20",
            "maxT": "10",
            "rawMaterialQuality": "homogeneous with disturbance",
            "rawMaterialColor": "brown",
            "amountOfCortex": "25-50%",
            "retouchLocation": "dorsal",
            "retouchLong": "14",
            "brokenComplete": "complete"
        }
    ],
    "morphologyOfTheEdge": [
        {
            "name": "Working edge ",
            "shape": "",
            "profile": "",
            "crossSection": "",
            "edgeAngle": "0"
        }
    ],
    "generalInfo": {
        "name": "Working edge 1",
        "date": "2014-11-11T09:56:42.210Z",
        "place": "test",
        "user": "",
        "_id": "5461e0463bdd6c020045c3cf"
    }
};

export const generalInfoFields: FormField[] = [
    {
        inputType: SmartInputType.text,
        label: 'Name',
        propertyName: 'name',
    },
    {
        inputType: SmartInputType.text,
        label: 'Date',
        propertyName: 'date',
    },
    {
        inputType: SmartInputType.text,
        label: 'Place',
        propertyName: 'place',
    },
    {
        inputType: SmartInputType.text,
        label: 'User',
        propertyName: 'user',
    }
];

export const root: FormField[] = [

    {
        inputType: SmartInputType.text,
        label: 'Site',
        propertyName: 'site',
    },
    {
        inputType: SmartInputType.text,
        label: 'Place',
        propertyName: 'place',
    },
    {
        inputType: SmartInputType.text,
        label: 'Area',
        propertyName: 'area',
    }
]

export const generalInfoOfItemFields: FormField[] = [
    {
        inputType: SmartInputType.text,
        label: 'Name',
        propertyName: 'name',
    },
    {
        inputType: SmartInputType.text,
        label: 'Raw Material',
        propertyName: 'rawMaterial',
    },
    {
        inputType: SmartInputType.text,
        label: 'Typology',
        propertyName: 'typology',
    },
    {
        inputType: SmartInputType.text,
        label: 'Type',
        propertyName: 'type',
    },
    {
        inputType: SmartInputType.text,
        label: 'Bulb',
        propertyName: 'bulb',
    },
    {
        inputType: SmartInputType.text,
        label: 'Striking Platform',
        propertyName: 'strikingPlatform',
    },
    {
        inputType: SmartInputType.text,
        label: 'Retouch',
        propertyName: 'retouch',
    },
    {
        inputType: SmartInputType.text,
        label: 'Max Length',
        propertyName: 'maxL',
    },
    {
        inputType: SmartInputType.text,
        label: 'Max Width',
        propertyName: 'maxW',
    },
    {
        inputType: SmartInputType.text,
        label: 'Max Thickness',
        propertyName: 'maxT',
    },
    {
        inputType: SmartInputType.text,
        label: 'Raw Material Quality',
        propertyName: 'rawMaterialQuality',
    },
    {
        inputType: SmartInputType.text,
        label: 'Raw Material Coloe',
        propertyName: 'rawMaterialColor',
    },
    {
        inputType: SmartInputType.text,
        label: 'Amount of Cortex',
        propertyName: 'amountOfCortex',
    },
    {
        inputType: SmartInputType.text,
        label: 'Retouch Location',
        propertyName: 'retouchLocation',
    },
    {
        inputType: SmartInputType.text,
        label: 'Retouch Long',
        propertyName: 'retouchLong',
    },
    {
        inputType: SmartInputType.text,
        label: 'Broken Complete',
        propertyName: 'brokenComplete',
    },
]