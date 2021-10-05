export interface Item {
    [id: string]: DynamicField;
}

export type DynamicField = string | string[] | Date | number |  { [id: string]: DynamicField };