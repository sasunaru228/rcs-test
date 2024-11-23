import React from "react";
import classes from "../App.module.css";

const Footer: React.FC = () => (
    <div className={classes.view_footer}>
        <div>
            <span style={{backgroundColor: "#4AB6E8"}}></span>
            <span>Клиентская часть</span>
        </div>
        <div>
            <span style={{backgroundColor: "#AA6FAC"}}></span>
            <span>Серверная часть</span>
        </div>
        <div>
            <span style={{backgroundColor: "#E85498"}}></span>
            <span>База данных</span>
        </div>
    </div>
)

export default Footer