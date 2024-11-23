import React from "react";
import classes from "../App.module.css";

interface LineHorizontalProps {
    left: number
    width: number
}

const LineHorizontal: React.FC<LineHorizontalProps> = ({left, width}) => {
    return (
        <div className={classes.horizontal}
             style={{
                 left: left,
                 width: width
             }}
        >
        </div>
    )
}

export default LineHorizontal