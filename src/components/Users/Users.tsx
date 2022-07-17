import React from "react";
import {UsersPropsType} from "./UsersContainer";
import style from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.png'


class Users extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        let {users, follow, unfollow} = this.props;

        return (
            <div className={style.content}>
                <h1 className={style.title}>Users</h1>
                <div className={style.itemsWrap}>
                    {
                        users.map(u => <div key={u.id} className={style.item}>
                            <div className={style.avatar}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="avatar"/>
                            </div>
                            <div className={style.info}>
                                <h3 className={style.name}>{u.name}</h3>
                                <div>
                                    {u.followed
                                        ? <button className={style.button}
                                                  onClick={() => unfollow(u.id)}>Unfollow</button>
                                        : <button className={style.button} onClick={() => follow(u.id)}>Follow</button>}
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className={style.buttonMoreWrap}>
                    <button className={style.buttonMore}>Load more...</button>
                </div>
            </div>
        )
    }
}

export default Users;