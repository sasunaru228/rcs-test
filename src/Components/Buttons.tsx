import classes from "../App.module.css";
import React from "react";

interface ButtonsProps {
    onClick: (idx: number) => void;
}

const Buttons: React.FC<ButtonsProps> = ({onClick}) => {

    return (
        <div className={classes.buttons}>
            {[1, 2, 3, 4, 5].map((num) => (
                <button key={num} onClick={() => onClick(num)}>
                    {num}
                </button>
            ))}
        </div>
    )
}

export default Buttons