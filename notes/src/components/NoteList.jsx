import React from 'react';
import Note from './Note';

const NoteList = ({notes, toogleImportance, remove}) => {
    return (
        <ul>
            {notes.map(note => (
                <Note key={note.id} note={note} toogleImportance={toogleImportance} remove={remove}/>
            ))}
        </ul>
    );
}

export default NoteList;
