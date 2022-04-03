import {get, post, put, del} from "./client";

export const getNotes = async (token) => {
    const { notes } = await get({
        endpoint: '/notes',
        token
    })

    return notes
}

export const getNote = async ({token, noteId}) => {
    const { note } = await get({
        endpoint: `/notes/${noteId}`,
        token
    })

    return note
}

export const updateNote = async ({token, noteId, title, content }) => {
    const { note } = await put({
        endpoint: `/notes/${noteId}`,
        token,
        body: {
            title,
            content
        }
    })

    return note
}

export const createNote = async ({token, title, content}) => {
    const { note } = await post({
        endpoint: `/notes`,
        token,
        body: {
            title,
            content
        }
    })

    return note
}

export const deleteNote = async ({token, noteId}) => {
    return del({
        endpoint: `/notes/${noteId}`,
        token
    })
}