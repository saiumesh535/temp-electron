import React from 'react';
import { AppBar, Button, Toolbar, Tooltip, Typography } from '@material-ui/core';

import './toolbar.scss';
import { history } from '../../utils/history';
import { PATHS } from '../../utils/paths';

import { Home } from '@material-ui/icons';

function ToolbarComponent() {

    function navigate(path: string) {
        history.push(path);
    }

    return (
        <AppBar position="static">
            <Toolbar className="toolbar">
                <Typography variant="h6">
                    Process Manager
                </Typography>
                <div className="menubutton">
                    <Tooltip placement='bottom' title='Home'>
                        <Button onClick={() => navigate(PATHS.HOME)}><Home /></Button>
                    </Tooltip>
                    <Tooltip placement='bottom' title='Add Command'>
                        <Button onClick={() => navigate(PATHS.ADD_COMMMAND)}>{'</>'}</Button>
                    </Tooltip>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default ToolbarComponent;
