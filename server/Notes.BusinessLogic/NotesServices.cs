using System.Collections.Generic;
using System.Linq;
using Notes.DB;

namespace Notes.BusinessLogic
{
    public class NotesServices : INotesServices
    {
        private AppDbContext _context;
        public NotesServices(AppDbContext context)
        {
            _context = context;
        }

        public List<Note> GetNotes()
        {
            return _context.Notes.ToList();
        }
        public Note GetNote(int id)
        {
            return _context.Notes.FirstOrDefault(n => n.Id == id);
        }

        public Note CreateNote(Note note)
        {
            _context.Add(note);
            _context.SaveChanges();

            return note;
        }
        public void DeleteNote(int id)
        {
            var note = _context.Notes.FirstOrDefault(n => n.Id == id);
            if (note != null)
            {
                _context.Notes.Remove(note);
                _context.SaveChanges();
            }
        }
        
        public void EditNote(Note note)
        {
            var editedNote = _context.Notes.FirstOrDefault(n => n.Id == note.Id);
            if (editedNote != null)
            {
                editedNote.Value = note.Value;
                _context.SaveChanges();
            }
        }
    }
}
