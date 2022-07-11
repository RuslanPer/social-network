import React from "react";
import {UsersPropsType} from "./UsersContainer";
import style from './Users.module.css'


const Users: React.FC<UsersPropsType> = ({users, follow, unfollow, setUsers}) => {

    if (users.length === 0) {
        setUsers([
            {
                id: 1,
                photoUrl: "http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-8.jpg",
                followed: false,
                fullName: "Dmitry",
                status: "I am a boss",
                location: {city: 'Minks', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: "http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-8.jpg",
                followed: true,
                fullName: "Sasha",
                status: "I am a boss too",
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: "http://demo.foxthemes.net/socialitev2.2/assets/images/avatars/avatar-8.jpg",
                followed: false,
                fullName: "Ruslan",
                status: "I am a boss too",
                location: {city: 'Kazan', country: 'Russia'}
            },
        ])
    }

    return (
        <div className={style.content}>
            <h1 className={style.title}>Users</h1>
            <div className={style.itemsWrap}>
                {
                    users.map(u => <div key={u.id} className={style.item}>
                        <div className={style.avatar}>
                            <img src={u.photoUrl} alt="avatar"/>
                        </div>
                        <div className={style.info}>
                            <h3 className={style.name}>{u.fullName}</h3>
                            <div className={style.location}>
                                <span>{u.location.city}</span>
                                <span>{u.location.country}</span>
                            </div>
                            <div>
                                {u.followed
                                    ? <button className={style.button} onClick={() => unfollow(u.id)}>Unfollow</button>
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
};

export default Users;