import { Card, CardContent, CardActions, IconButton } from '@material-ui/core';
import { AddBox } from '@material-ui/icons'
import React, { useState } from 'react';
import { FormField } from '../smart-form.model';
import { SmartInput } from '../smart-input/SmartInput';

export interface SmartGroupProps {
    fields: FormField[];
    data: { [id: string]: unknown }[] | { [id: string]: unknown };
    isMultiple: boolean;
}

export const SmartGroup: React.FC<SmartGroupProps> = (props) => {
    const [fieldsState, setFieldsState] = useState<{ [id: string]: unknown }[] | { [id: string]: unknown }>(props.data);
    const [fieldsGroups, setFieldsGroups] = useState<FormField[][]>([props.fields]);


    return <Card variant="elevation">
        <CardContent>
            {fieldsGroups.map((fields, groupIndex) =>
                <Card key={groupIndex} variant="outlined">
                    <CardContent>
                        {fields.map((field, fieldIndex) =>
                            <SmartInput
                                key={fieldIndex}
                                label={field.label}
                                inputType={field.inputType}
                                id={field.propertyName}
                                propertyName={field.propertyName}
                                value={
                                    fieldsState instanceof Array ?
                                        fieldsState[groupIndex][field.propertyName] :
                                        fieldsState[field.propertyName]}
                                options={field.options}
                                onChange={(fieldName, value) => setFieldsState({
                                    ...fieldsState,
                                    [fieldName]: value
                                })}
                            />
                        )}
                    </CardContent>
                </Card>
            )}
        </CardContent>
        <CardActions>
            {props.isMultiple &&
                <IconButton
                    color="primary"
                    component="span"
                    onClick={addFieldsGroup}>
                    <AddBox />
                </IconButton>
            }
        </CardActions>
    </Card>

    function addFieldsGroup(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
        setFieldsGroups([
            ...fieldsGroups,
            props.fields
        ]);

        if (fieldsState instanceof Array) {
            setFieldsState([
                ...fieldsState,
                {}
            ]);
            return;
        } else{
            setFieldsState({
                ...fieldsState
            });
        }
    }
};