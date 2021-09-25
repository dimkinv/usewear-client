import { Card, CardActions, CardContent, IconButton } from '@material-ui/core';
import { AddBox } from '@material-ui/icons';
import React, { PropsWithChildren, useState } from 'react';
import { FormField } from '../smart-form.model';
import { SmartGroup } from '../smart-group/SmartGroup';

export interface SmartGroupControllerProps {
    data: { [id: string]: unknown }[];
    fields: FormField[];
    onChange: (index: number, fieldName: string, value: unknown) => void;
}

export const SmartGroupController: React.FC<SmartGroupControllerProps> = (props: PropsWithChildren<SmartGroupControllerProps>) => {
    const [groups, setGroups] = useState(props.data);

    return (
        <Card variant="elevation">
            <CardContent>
                {groups.map((group, index) => <SmartGroup key={index} fields={props.fields} groupData={group} onGroupChange={group => onGroupChange(index, group)}></SmartGroup>)}
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

    function onGroupChange(groupIndex: number, group: { [id: string]: unknown }){
        const changedGroups = [...groups];
        changedGroups[groupIndex] = group;
    }
    
    function onGroupAdd(){
        setGroups([
            ...groups,
            {}
        ]);
    }
}