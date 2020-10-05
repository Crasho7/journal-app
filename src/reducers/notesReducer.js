import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null
};

export const notesReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...payload
                }
            };
        case types.notesAddNew:
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            }
        case types.notesLoad:
            return {
                ...state,
                notes: [...payload]
            };
        case types.notesUpdated:
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === payload.id
                        ? payload.note
                        : note
                )
            };
        case types.notesDelete:
            return {
                ...state,
                active: null,
                notes: state.notes.filter(note => note.id !== payload)
            }
        case types.notesLogoutCleaning:
            return {
                ...state,
                active: null,
                notes: []
            };
        default:
            return state;
    }
}

//react-journal