import { createStore } from "vuex";

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
        }
    }
})