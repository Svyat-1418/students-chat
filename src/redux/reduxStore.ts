import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionsType, profileReducer} from "./profileReducer";
import {DialogsActionsType, dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {UsersActionsType, usersReducer} from "./usersReducer";
import {AuthActionsType, authReducer} from "./authReducer";
import thunk, {ThunkAction} from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./appReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))

// определить автоматически тип всего объекта store
export type ReduxStoreType = typeof store

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

//тип всех action-ов приложения
export type AllAppActionsType = UsersActionsType | DialogsActionsType | ProfileActionsType | AuthActionsType

//типизация для thunk
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AllAppActionsType>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;