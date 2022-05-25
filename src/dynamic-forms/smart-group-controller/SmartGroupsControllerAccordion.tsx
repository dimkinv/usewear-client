import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React, { PropsWithChildren, useState } from 'react';
import { DynamicGroup } from '../dynamic-forms-types';
import { FormFieldMetadata } from '../smart-form.model';
import './SmartGroupsController.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { SmartGroupAccordion } from '../smart-group/SmartGroupAccordion';

export interface SmartGroupControllerProps {
    title: string;
    data: DynamicGroup[];
    fields: FormFieldMetadata[];
    onChange: (changedGroups: DynamicGroup[]) => void;
}

export const SmartGroupControllerAccordion: React.FC<SmartGroupControllerProps> = (props: PropsWithChildren<SmartGroupControllerProps>) => {
    const [groups, setGroups] = useState(props.data);

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{props.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {
                    groups.map((group, index) =>
                        <div className="group" key={index}>
                            <SmartGroupAccordion fieldsMetadata={props.fields} groupData={group} onGroupChange={group => onGroupChange(index, group)}></SmartGroupAccordion>
                        </div>)
                }
            </AccordionDetails>
        </Accordion>
    )

    function onGroupChange(index: number, group: DynamicGroup) {
        const updatedGroups = [
            ...groups
        ];
        updatedGroups[index] = group;

        setGroups(updatedGroups);
        props.onChange(updatedGroups);
    }

    function onGroupAdd() {
        setGroups([
            ...groups,
            {}
        ]);
        props.onChange(groups);
    }


}