const initialState = {
  notes: [],
};

export const NOTES_ACTIONS = {
  SET: 'SET',
  DELETE: 'DELETE',
  NEW: 'NEW',
  EDIT: 'EDIT',
};

export const actions = {
  setNotes: (payload) => ({ type: NOTES_ACTIONS.SET, payload }),
  deleteNote: (payload) => ({ type: NOTES_ACTIONS.DELETE, payload }),
  newNote: (payload) => ({ type: NOTES_ACTIONS.NEW, payload }),
  editNote: (payload) => ({ type: NOTES_ACTIONS.EDIT, payload }),
};

export function notesReducer(state = initialState, action) {
  switch (action.type) {
    case NOTES_ACTIONS.SET:
      return {
        ...state,
        notes: [...action.payload].sort((a, b) => a.id - b.id),
      };

    case NOTES_ACTIONS.DELETE:
      console.log(action.payload);
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };

    case NOTES_ACTIONS.NEW:
      return {
        ...state,
        notes: [...state.notes, action.payload].sort((a, b) => a.id - b.id),
      };

    case NOTES_ACTIONS.EDIT:
      return {
        ...state,
        notes: [
          action.payload,
          ...state.notes.filter(({ id }) => id !== action.payload.id),
        ].sort((a, b) => a.id - b.id),
      };

    default:
      return state;
  }
}
