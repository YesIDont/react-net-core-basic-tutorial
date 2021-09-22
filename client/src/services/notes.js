import axios from 'axios';

import { actions } from '../redux/notes-reducer';

const baseUrl = 'https://localhost:5001/notes';

export async function getNotes(dispatch) {
  try {
    const { data } = await axios.get(baseUrl);
    dispatch(actions.setNotes(data));
  } catch (error) {
    console.log('Error! Could not get current notes state.');
    console.log(`${error}`);
  }
}

export async function deleteNote(dispatch, note) {
  try {
    const result = await axios.delete(`${baseUrl}/${note.id}`);
    dispatch(actions.deleteNote(note));
  } catch (error) {
    console.log('Error! Could not delete note.');
    console.log(`${error}`);
  }
}

export async function newNote(dispatch, note) {
  try {
    const { data } = await axios.post(baseUrl, note);
    dispatch(actions.newNote(data));
  } catch {
    console.log('Error! Could not create new note.');
  }
}

export async function editNote(dispatch, note) {
  try {
    const _response = await axios.put(baseUrl, note);
    dispatch(actions.editNote(note));
  } catch {
    console.log('Error! Could not edit note.');
  }
}
