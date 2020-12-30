import { Card, CardContent, CardActions, IconButton } from '@material-ui/core';
import { AddBox } from '@material-ui/icons'
import React from 'react';
import { SmartInput } from '../smart-input/SmartInput';

export const SmartGroup: React.FC = () => (
    <Card variant="elevation">
        <CardContent>
            <Card variant="outlined">
                <CardContent>
                    <SmartInput label="test 1" />
                    <SmartInput label="test 1" />
                    <SmartInput label="test 1" />
                    <SmartInput label="test 1" />
                    <SmartInput label="test 1" />
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