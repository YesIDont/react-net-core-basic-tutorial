using Notes.DB;
using System.Collections.Generic;

namespace Notes.BusinessLogic
{
    public interface INotesServices
    {
        List<Note> GetNotes();
        Note GetNote(int id);
        Note CreateNote(Note note);
        void DeleteNote(int id);
        void EditNote(Note note);
    }
}
