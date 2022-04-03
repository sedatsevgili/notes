import { createStore } from "vuex";
import { login, register } from "../api/auth";
import { getNotes, getNote, createNote, deleteNote, updateNote } from "../api/notes";

const store = createStore({
    state() {
        return {
            auth: {
                token: null
            },
            notes: [],
            noteToUpdate: null
        }
    },
    mutations: {
        setToken(state, token) {
            state.auth.token = token;
        },
        clearToken(state) {
            state.auth.token = null
        },
        setNotes(state, notes) {
            state.notes = notes
        },
        clearNotes(state) {
            state.notes = []
        },
        setNoteToUpdate(state, note) {
            state.noteToUpdate = note
        },
        clearNoteToUpdate(state) {
            state.noteToUpdate = null
        }
    },
    actions: {
        async login({commit}, { email, password }) {
            const token = await login(email, password)
            commit('setToken', token)
        },
        async register({commit}, {email, password}) {
            const token = await register(email, password)
            commit('setToken', token)
        },
        async getNotes({commit, state}) {
            const notes = await getNotes(state.auth.token)
            commit('setNotes', notes)
        },
        async getNoteToUpdate({commit, state}, {noteId}) {
            const note = await getNote({token: state.auth.token, noteId})
            commit('setNoteToUpdate', note)
        },
        async createNote({commit, state}, {title, content}) {
            const note = await createNote({token: state.auth.token, title, content})
            commit('setNotes', [...state.notes, note])
        },
        async updateNote({commit, state}, {noteId, title, content}) {
            const note = await updateNote({token: state.auth.token, noteId, title, content})
            const noteIndex = state.notes.findIndex(note => note.id === noteId)
            commit('setNotes', [
                ...state.notes.slice(0, noteIndex),
                note,
                ...state.notes.slice(noteIndex + 1)
            ])
        },
        async deleteNote({commit, state}, {noteId}) {
            await deleteNote({token: state.auth.token, noteId})
            const noteIndex = state.notes.findIndex(note => note.id === noteId)
            commit('setNotes', [
                ...state.notes.slice(0, noteIndex),
                ...state.notes.slice(noteIndex + 1)
            ])
        }
    },
    getters: {
        token: (state) => state.auth.token,
        notes: (state) => state.notes,
        noteToUpdate: (state) => state.noteToUpdate
    }
})

export default store
