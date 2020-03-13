/*
 * Copyright (c) 2020.
 * Project: ui.
 * Author: hirosume.
 */
import { get } from './api';

export function getUser() {
    return get('/user/');
}
