import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles';
import clsx from 'clsx';

function TextFields(props){
    const classes = useStyles();
    return(
        <TextField label={props.label} variant="outlined"className={clsx(classes.textField)}/>
    )
}

export default TextFields;