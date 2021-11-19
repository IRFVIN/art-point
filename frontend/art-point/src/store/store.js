import { configureStore, createSlice } from "@reduxjs/toolkit";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const authenticationSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        token: null,
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload.jwtToken;
            state.user = action.payload.user;
            console.log(state.user);
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.token = null;
            state.user = null;
        }
    }
});

const persistedReducer = persistReducer(persistConfig, authenticationSlice.reducer)

const store = configureStore({
    reducer: { auth: persistedReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})



export const { login, logout } = authenticationSlice.actions;
export default store;