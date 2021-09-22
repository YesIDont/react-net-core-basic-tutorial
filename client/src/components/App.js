import React from 'react';

import { NotesTable } from './NotesTable';
import { EditNoteModal } from './EditNoteModal';
import { newNote } from '../services/notes';

export function App() {
  return (
    <div className="App" style={{ maxWidth: '600px', margin: '3rem auto' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '2rem',
          alignItems: 'center',
        }}
      >
        <h1>My Notes</h1>
        <EditNoteModal buttonText="New Note" onFormSubmit={newNote} />
      </div>
      <NotesTable />
    </div>
  );
}
