import React from "react";
import Button from '@material-ui/core/Button';

const Square = props => {
    return (
        <Button variant="outlined" onClick={props.onClick}>
            {props.value || ''}
        </Button>
    )
};

export default Square;