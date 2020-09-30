import { Button, Card, CardActions, CardContent, TextField } from '@material-ui/core';
import React from 'react';
import { Close } from '@material-ui/icons';


import './addcommand.scss'

function AddCommand() {
    return (
        <div className="add_command__container">
            <div className="title">
                <Close color='action' />
            </div>
        </div>
    )
}

export default AddCommand;
