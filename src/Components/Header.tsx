import React from "react";
import { ReactComponent as Dots} from './../svgs/dots.svg'
import classes from "../App.module.css";

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => (
    <div className={classes.view_header}>
        <span>Количество пройденных тестов {title}</span>
        <Dots/>
    </div>
)

export default Header