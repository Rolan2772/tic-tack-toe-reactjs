import React from "react";
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    cell: {
        'min-height': '36px'
    }
};

export const Square = props => {
    return (
        <Button variant="outlined" onClick={props.onClick} className={props.classes.cell}>
            {props.value || ''}
        </Button>
    )
};

export default withStyles(styles)(Square);