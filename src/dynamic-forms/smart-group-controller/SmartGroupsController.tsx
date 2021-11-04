import { AddBox } from '@mui/icons-material';
import { Card, CardContent, CardActions, IconButton } from '@mui/material';
import React, { PropsWithChildren, useState } from 'react';
import { DynamicGroup } from '../dynamic-forms-types';
import { FormFieldMetadata } from '../smart-form.model';
import { SmartGroup } from '../smart-group/SmartGroup';
import './SmartGroupsController.css';

export interface SmartGroupControllerProps {
    title: string;
    data: DynamicGroup[];
    fields: FormFieldMetadata[];
    onChange: (groupIndex: number, changedGroup: DynamicGroup) => void;
}

export const SmartGroupController: React.FC<SmartGroupControllerProps> = (props: PropsWithChildren<SmartGroupControllerProps>) => {
    const [groups, setGroups] = useState(props.data);

    return (
        <Card variant="elevation">
            <CardContent>
                <h3>{props.title}</h3>
                {
                    groups.map((group, index) =>
                        <div className="group" key={index}>
                            <SmartGroup fieldsMetadata={props.fields} groupData={group} onGroupChange={group => props.onChange(index, group)}></SmartGroup>
                        </div>)
                }
            </CardContent>
            <CardActions>
                <IconButton
                    color="primary"
                    component="span"
                    onClick={onGroupAdd}>
                    <AddBox />
                </IconButton>
            </CardActions>
        </Card>
    )

    function onGroupAdd() {
        setGroups([
            ...groups,
            {}
        ]);
    }
}