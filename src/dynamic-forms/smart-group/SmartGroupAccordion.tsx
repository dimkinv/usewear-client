import './SmartGroup.css';
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Typography } from '@mui/material';
import React, { useState } from 'react';
import { FormFieldMetadata } from '../smart-form.model';
import { SmartInput } from '../smart-input/SmartInput';
import { DynamicGroup, DynamicInputType } from '../dynamic-forms-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export interface SmartGroupProps {
    standalone?: boolean;
    title?: string;
    fieldsMetadata: FormFieldMetadata[];
    groupData: DynamicGroup;
    onGroupChange: (group: DynamicGroup) => void;
}

export const SmartGroupAccordion: React.FC<SmartGroupProps> = (props) => {
    const [group, setGroup] = useState(props.groupData || {});

    return (
        <>
            {props.standalone ?
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{props.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {props.fieldsMetadata.map((field, fieldIndex) =>
                            <SmartInput
                                className="smart-input"
                                key={fieldIndex}
                                label={field.label}
                                inputType={field.inputType}
                                id={field.propertyName}
                                propertyName={field.propertyName}
                                value={group[field.propertyName]}
                                onFieldChange={onFieldChange}
                            />
                        )}
                    </AccordionDetails>
                </Accordion>
                :
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
                                onFieldChange={onFieldChange}
                            />
                        )}
                    </CardContent>
                </Card>}
        </>
    )
    function onFieldChange(fieldName: string, value: DynamicInputType) {
        const updatedGroup = {
            ...group,
            [fieldName]: value
        }

        setGroup(updatedGroup);
        props.onGroupChange(updatedGroup);
    }
};