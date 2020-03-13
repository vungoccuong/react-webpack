/*
 * Copyright (c) 2020.
 * Project: ui.
 * Author: hirosume.
 */
const axios = require('axios');

const parseResponse = function(resp) {
    return resp.data;
};
export function get(url, config) {
    return axios.get(url, config).then(parseResponse);
}
export function post(url, body, config) {
    return axios.post(url, body, config).then(parseResponse);
}
export function put(url, body, config) {
    return axios.put(url, body, config).then(parseResponse);
}
export function del(url, config) {
    return axios.delete(url, config).then(parseResponse);
}
