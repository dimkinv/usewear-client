import { Card, CardContent, CardActions, IconButton } from '@material-ui/core';
import { AddBox } from '@material-ui/icons'
import React from 'react';
import { SmartInput, SmartInputType } from '../smart-input/SmartInput';

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

export const SmartGroup: React.FC = () => (
    <Card variant="elevation">
        <CardContent>
            <Card variant="outlined">
                <CardContent>
                    <SmartInput label="test 1" inputType={SmartInputType.text} id="input" />
                    <SmartInput label="test 1" inputType={SmartInputType.select} id="select" options={names} />
                    <SmartInput label="test 1" inputType={SmartInputType.multi_select} id="multiselect" options={names} />
                </CardContent>
            </Card>

        </CardContent>
        <CardActions>
            <IconButton color="primary" aria-label="upload picture" component="span">
                <AddBox />
            </IconButton>
        </CardActions>
    </Card>
);

export interface FormGroupProps {
    isMultiple: boolean;
}