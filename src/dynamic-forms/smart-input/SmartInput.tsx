import { TextField } from '@material-ui/core';
import React from 'react';
export const SmartInput: React.FC<SmartInputProps> = (props: React.PropsWithChildren<SmartInputProps>) => {
    return (
        <div>
            <TextField
                fullWidth
                label={props.label}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
        </div>
    );
}

export interface SmartInputProps {
    inputType?: SmartInputType
    label: string;
    placeholder?: string;
    value?: string;
    onChange?: (newValue: unknown) => void;
}

export enum SmartInputType {
    text = 'text',
    select = 'select',
    multi_select = 'multi_select'
}