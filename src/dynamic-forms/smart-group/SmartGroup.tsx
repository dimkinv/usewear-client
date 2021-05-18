import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import { FormField } from '../smart-form.model';
import { SmartInput } from '../smart-input/SmartInput';

export interface SmartGroupProps {
    fields: FormField[];
    data: { [id: string]: unknown };
    onChange: (fieldName: string, value: unknown) => void;
}

export const SmartGroup: React.FC<SmartGroupProps> = (props) => {



    return (
        <Card variant="outlined">
            <CardContent>
                {props.fields.map((field, fieldIndex) =>
                    <SmartInput
                        key={fieldIndex}
                        label={field.label}
                        inputType={field.inputType}
                        id={field.propertyName}
                        propertyName={field.propertyName}
                        value={props.data[field.propertyName]}
                        options={field.options}
                        onChange={props.onChange}
                    />
                )}
            </CardContent>
        </Card>
    )
};