import React from "react";
import classes from "../App.module.css";
import ArrowSight from './../svgs/arrowSight.svg'

interface LineVerticalProps {
    left: number
    height: number
    arrow: boolean
}

const LineVertical: React.FC<LineVerticalProps> = ({left, height, arrow}) => {
    return (
        <div className={classes.vertical}
             style={{
                 left: left,
                 height: height
             }}
        >
            {arrow ? <img alt="arrow" src={ArrowSight}/>: null}
        </div>
    )
}

export default LineVertical