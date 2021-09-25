import './SmartGroup.css';
import { Card, CardContent } from '@mui/material';
import React, { useState } from 'react';
import { FormField } from '../smart-form.model';
import { SmartInput } from '../smart-input/SmartInput';

export interface SmartGroupProps {
    fields: FormField[];
    groupData: { [id: string]: unknown };
    onGroupChange: (group: { [id: string]: unknown }) => void;
}

export const SmartGroup: React.FC<SmartGroupProps> = (props) => {
    const [group, setGroup] = useState(props.groupData);

    return (
        <Card variant="outlined">
            <CardContent>
                {props.fields.map((field, fieldIndex) =>
                    <SmartInput
                        className="smart-input"
                        key={fieldIndex}
                        label={field.label}
                        inputType={field.inputType}
                        id={field.propertyName}
                        propertyName={field.propertyName}
                        value={group[field.propertyName]}
                        options={field.options}
                        onFieldChange={onFieldChange}
                    />
                )}
            </CardContent>
        </Card>
    )

    function onFieldChange(fieldName: string, value: unknown){
        const updatedGroup = {
            ...group,
            [fieldName]: value
        }

        setGroup(updatedGroup);
        props.onGroupChange(updatedGroup);
    }
};