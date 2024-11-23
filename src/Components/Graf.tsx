import classes from '../App.module.css'
import React, {forwardRef} from "react";

interface GrafProps {
    front: number,
    back: number,
    db: number,
    coef: number,
}

const Graf = forwardRef<HTMLDivElement, GrafProps>(({front, back, db, coef}, ref) => {
    return (
        <div className={classes.view_data_info_column_conteiner}>
            <div ref={ref} className={classes.view_data_info_column_graf}>
                <div style={{height: coef === 0 ? 30 : coef * front}}
                     className={classes.view_data_info_column_graf_front}>{front}</div>
                <div style={{height: coef === 0 ? 30 : coef * back}}
                     className={classes.view_data_info_column_graf_back}>{back}</div>
                <div style={{height: coef === 0 ? 30 : coef * db}}
                     className={classes.view_data_info_column_graf_db}>{db}</div>
            </div>
        </div>
    )
})


export default Graf

