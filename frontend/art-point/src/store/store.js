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
        token: null
    },
    reducers: {
        login: (state, action) => {
            console.log('called');
            state.isLoggedIn = true;
            state.token = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.token = null;
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