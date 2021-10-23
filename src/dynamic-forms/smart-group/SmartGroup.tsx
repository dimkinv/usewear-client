import './SmartGroup.css';
import { Card, CardContent } from '@mui/material';
import React, { useState } from 'react';
import { FormFieldMetadata } from '../smart-form.model';
import { SmartInput } from '../smart-input/SmartInput';
import { DynamicGroup, DynamicInputType } from '../dynamic-forms-types';

export interface SmartGroupProps {
    fieldsMetadata: FormFieldMetadata[];
    groupData: DynamicGroup;
    onGroupChange: (group: DynamicGroup) => void;
}

export const SmartGroup: React.FC<SmartGroupProps> = (props) => {
    const [group, setGroup] = useState(props.groupData);

    return (
        <Card variant="outlined">
            <CardContent>
                {props.fieldsMetadata.map((field, fieldIndex) =>
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

    function onFieldChange(fieldName: string, value: DynamicInputType){
        const updatedGroup = {
            ...group,
            [fieldName]: value
        }

        setGroup(updatedGroup);
        props.onGroupChange(updatedGroup);
    }
};