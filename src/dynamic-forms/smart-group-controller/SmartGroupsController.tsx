import { AddBox } from '@mui/icons-material';
import { Card, CardContent, CardActions, IconButton } from '@mui/material';
import React, { PropsWithChildren, useState } from 'react';
import { FormField } from '../smart-form.model';
import { SmartGroup } from '../smart-group/SmartGroup';
import './SmartGroupsController.css';

export interface SmartGroupControllerProps {
    data: { [id: string]: unknown }[];
    fields: FormField[];
    onChange: (groupIndex: number, changedGroup: { [id: string]: unknown }) => void;
}

export const SmartGroupController: React.FC<SmartGroupControllerProps> = (props: PropsWithChildren<SmartGroupControllerProps>) => {
    const [groups, setGroups] = useState(props.data);

    return (
        <Card variant="elevation">
            <CardContent>
                {
                    groups.map((group, index) =>
                        <div className="group" key={index}>
                            <SmartGroup fields={props.fields} groupData={group} onGroupChange={group => props.onChange(index, group)}></SmartGroup>
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