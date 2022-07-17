import {ActionsType} from "./redux-store";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


type PhotosType = {
    small: string | null
    large: string | null
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: PhotosType
    status: string | null
    followed: boolean
}

const initialState = {
    users: [] as Array<UserType>,
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