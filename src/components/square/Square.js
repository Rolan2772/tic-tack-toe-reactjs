import React from "react";
import Button from '@material-ui/core/Button'

export default function Square(props) {
    return (
        <Button variant="outlined" onClick={props.onclick}>
            {props.value}
        </Button>
    )
}