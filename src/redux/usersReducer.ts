import {ActionsType} from "./redux-store";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

const initialState = {
    users: [
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
    ] as Array<UserType>,
}

export type initialStateType = typeof initialState

const usersReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followActionCreator = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}
export const unfollowActionCreator = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}
export const setUsersActionCreator = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export default usersReducer;