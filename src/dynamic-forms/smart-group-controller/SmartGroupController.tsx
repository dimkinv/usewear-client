import { Card, CardActions, CardContent, IconButton } from '@material-ui/core';
import { AddBox } from '@material-ui/icons';
import React, { PropsWithChildren, useState } from 'react';
import { FormField } from '../smart-form.model';
import { SmartGroup } from '../smart-group/SmartGroup';

export interface SmartGroupControllerProps {
    data: { [id: string]: unknown }[];
    fields: FormField[];
    onChange: (index: number, fieldName: string, value: unknown) => void;
    onGroupAdd?: () => void;
}

export const SmartGroupController: React.FC<SmartGroupControllerProps> = (props: PropsWithChildren<SmartGroupControllerProps>) => {
    return (
        <Card variant="elevation">
            <CardContent>
                {props.data.map((group, index) => <SmartGroup key={index} fields={props.fields} data={group} onChange={props.onChange.bind(null, index)}></SmartGroup>)}
            </CardContent>
            <CardActions>
                <IconButton
                    color="primary"
                    component="span"
                    onClick={props.onGroupAdd}>
                    <AddBox />
                </IconButton>
            </CardActions>
        </Card>
    )
}