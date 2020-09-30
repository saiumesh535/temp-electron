import { Button, Card, CardActions, IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useStore } from '../../state';
import { PATHS } from '../../utils/paths';

import './collections.scss';


const options = [
    'Edit',
    'Delete'
];

const ITEM_HEIGHT = 48;

function CollectionComponent() {


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const history = useHistory();

    const collections = useStore((state) => state.collections);

    function AddNew() {
        history.push(PATHS.ADD_COMMMAND);
    }


    return (
        <div className="collection">
            {[...collections].map((c) => (
                <Card key={c.id} className="collection__card">
                    <div className="menu__button">
                        <p title={c.title}>{c.title}</p>
                        {(c.id !== -1) ? <Fragment>
                            <IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={handleClick}>
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                },
                            }}
                        >
                            {options.map((option) => (
                                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Menu>
                        </Fragment> : <Fragment></Fragment> }
                    </div>
                    <CardActions className='collection__action'>
                        <Button onClick={AddNew} variant="contained" color="primary">
                            {c.id !== -1 ? c.title : 'Add'}
                        </Button>
                    </CardActions>
                </Card>
            ))
            }
        </div>
    )
}

export default CollectionComponent;
