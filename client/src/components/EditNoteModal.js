import React, { useEffect, useState } from 'react';
import { Button, Form, Modal as BootstrapModal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export function EditNoteModal({ onFormSubmit, editedNote = {}, buttonText }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editedNoteState, setEditedNoteState] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    setEditedNoteState(editedNote);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);
  const handleSave = () => {
    if (editedNoteState !== '') onFormSubmit(dispatch, editedNoteState);
    setEditedNoteState('');
    handleClose();
  };

  return (
    <>
      <Button variant="success" onClick={handleShow} size="sm">
        {buttonText}
      </Button>

      <BootstrapModal show={isOpen} onHide={handleClose}>
        <BootstrapModal.Header>
          <BootstrapModal.Title>Modal heading</BootstrapModal.Title>
        </BootstrapModal.Header>

        <Form
          onSubmit={(event) => {
            event.preventDefault();
            if (editedNoteState !== '') handleSave();
          }}
        >
          <BootstrapModal.Body>
            <Form.Group>
              <Form.Control
                value={`${editedNoteState.value ?? ''}`}
                onChange={(event) =>
                  setEditedNoteState((prev) => ({
                    ...prev,
                    value: event.target.value,
                  }))
                }
              />
            </Form.Group>
          </BootstrapModal.Body>
          <BootstrapModal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </BootstrapModal.Footer>
        </Form>
      </BootstrapModal>
    </>
  );
}
