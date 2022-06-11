import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string,
    id: number
}

const DialogItem: React.FC<DialogItemPropsType> = ({name, id}) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + id}>{name}</NavLink>
        </div>
    );
}

export default DialogItem;