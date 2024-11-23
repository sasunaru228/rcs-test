import React from "react";
import classes from "../App.module.css";
import ArrowUp from "../svgs/arrowUp.svg";
import ArrowDown from "../svgs/arrowDown.svg";

interface DiffBlockProps {
    width: number | null,
    marginLeft: number
    diff: number
}


const DiffBlock: React.FC<DiffBlockProps> = ({width, marginLeft, diff}) => {
    return (
        <div className={classes.diff} style={{
            top: 80,
            left: (width ? marginLeft : 0),
            transform: "translate(-50%)",
            backgroundColor: (diff < 0 ? '#FC440FFF' : diff === 0 ? '#898290FF' : '#00CC99FF')
        }}
        >
            {diff === 0 ? null :
                <img src={diff > 0 ? ArrowUp : ArrowDown}/>
            }
            {(diff > 0 ? '+' : '') + diff}
        </div>
    )
}

export default DiffBlock