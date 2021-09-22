import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

import { EditNoteModal } from './EditNoteModal';
import { editNote, deleteNote, getNotes } from '../services/notes';

export function NotesTable() {
  const notes = useSelector(({ notes }) => notes);
  const dispatch = useDispatch();

  useEffect(() => {
    getNotes(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <table className="table table-dark">
      <tbody>
        {notes.map((note) => (
          <tr
            key={note.id}
            style={{
              display: 'flex',
              alignItems: 'stretch',
              justifyContent: 'left',
            }}
          >
            <td>
              <Button
                className="btn"
                variant="danger"
                onClick={() => deleteNote(dispatch, note)}
                size="sm"
              >
                Delete
              </Button>
            </td>
            <td>
              <EditNoteModal
                buttonText="Edit"
                editedNote={note}
                onFormSubmit={(dispatch, editedNote) =>
                  editNote(dispatch, editedNote)
                }
              />
            </td>
            <td style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              {note.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
