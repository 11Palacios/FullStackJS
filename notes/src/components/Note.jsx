import React from 'react';

const Note = ({note, toogleImportance}) => {
    const label = note.important ? 'make not important' : 'make important';
    return (
        <li>{note.content} <button onClick={() => toogleImportance(note.id)}>{label}</button></li>
    );
}

export default Note;
