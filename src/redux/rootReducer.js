/*
 * Copyright (c) 2020.
 * Project: ui.
 * Author: hirosume.
 */
import { combineReducers } from '@reduxjs/toolkit';
import user from './slices/user';
export default combineReducers({ user: user });
