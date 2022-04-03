import {API_BASE_URL} from "../constants/api";

const call = async ({endpoint, method, body, token}) => {
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    if (token) {
        headers['Authorization'] = `Bearer ${token}`
    }

    const response = await fetch(API_BASE_URL + endpoint, {
        method,
        headers,
        body: JSON.stringify(body)
    });
    return await response.json();
}

export const post = async ({endpoint, body, token}) => {
    return call({endpoint, body, token, method: 'POST'});
}

export const get = async ({endpoint, token}) => {
    return call({endpoint, token, method: 'GET'});
}

export const put = async ({endpoint, body, token}) => {
    return call({endpoint, token, body, method: 'PUT'})
}

export const del = async ({endpoint, token}) => {
    return call({endpoint, token, method: 'DELETE'})
}