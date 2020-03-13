/*
 * Copyright (c) 2020.
 * Project: ui.
 * Author: hirosume.
 */

import { createSlice } from '@reduxjs/toolkit';
import { getUser } from '../../api/user';

const initialState = {
    email: '',
    fullname: '',
    avatar: '',
    error: '',
};
const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            return action.payload;
        },
        setUserFail(state, action) {
            return { ...initialState, error: action.payload };
        },
    },
});
export const { setUser } = slice.actions;
export default slice.reducer;
export function fetchUser() {
    return async dispatch => {
        try {
            let user = await getUser();
            dispatch(setUser(user.data));
        } catch (e) {
            dispatch(setUser(e.toString()));
        }
    };
}
