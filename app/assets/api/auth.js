import {post} from "./client";

export const login = async (email, password) => {
    const { token } = await post ({
        endpoint: '/login_check',
        body: {
            email,
            password
        }
    })
    return token
}

export const register = async(email, password) => {
    const { token } = await post({
        endpoint: '/register',
        body: {
            email,
            password
        }
    });
    return token;
}