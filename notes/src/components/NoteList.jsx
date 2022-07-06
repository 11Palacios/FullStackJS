import React from 'react';
import Note from './Note';

const NoteList = ({notes, toogleImportance}) => {
    return (
        <ul>
            {notes.map(note => (
                <Note key={note.id} note={note} toogleImportance={toogleImportance}/>
            ))}
        </ul>
    );
}

export default NoteList;
