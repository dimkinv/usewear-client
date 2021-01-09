import { Card, CardContent, CardActions, IconButton } from '@material-ui/core';
import { AddBox } from '@material-ui/icons'
import React, { useEffect, useState } from 'react';
import { FormField } from '../smart-form.model';
import { SmartInput } from '../smart-input/SmartInput';

export interface SmartGroupProps {
    fields: FormField[];
}

export const SmartGroup: React.FC<SmartGroupProps> = (props) => {
    const initialState = props.fields.reduce((acc, field)=>{
     return {
         ...acc,
         [field.propertyName]: field.value
     }   
    }, {});
    const [fieldsState, setFieldsState] = useState<{ [index: string]: string | string[] }>(initialState);

    useEffect(()=>{
        console.log(fieldsState);
    }, [fieldsState])

    return <Card variant="elevation">
        <CardContent>
            <Card variant="outlined">
                <CardContent>
                    {props.fields.map((field, index) =>
                        <SmartInput
                            key={index}
                            label={field.label}
                            inputType={field.inputType}
                            id={field.propertyName}
                            propertyName={field.propertyName}
                            value={fieldsState![field.propertyName]}
                            onChange={(fieldName, value) => setFieldsState({
                                ...fieldsState,
                                [fieldName]: value
                            })}
                        />
                    )}
                </CardContent>
            </Card>
        </CardContent>
        <CardActions>
            <IconButton color="primary" aria-label="upload picture" component="span">
                <AddBox />
            </IconButton>
        </CardActions>
    </Card>
};

export interface FormGroupProps {
    isMultiple: boolean;
}