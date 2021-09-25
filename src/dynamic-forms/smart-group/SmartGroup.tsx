import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import { FormField } from '../smart-form.model';
import { SmartInput } from '../smart-input/SmartInput';

export interface SmartGroupProps {
    fields: FormField[];
    groupData: { [id: string]: unknown };
    onGroupChange: (group: { [id: string]: unknown }) => void;
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
                        value={props.groupData[field.propertyName]}
                        options={field.options}
                        onFieldChange={onFieldChange}
                    />
                )}
            </CardContent>
        </Card>
    )

    function onFieldChange(fieldName: string, value: unknown){
        const updatedGroup = {
            ...props.groupData,
            [fieldName]: value
        }

        props.onGroupChange(updatedGroup);
    }
};