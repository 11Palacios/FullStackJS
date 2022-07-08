import React from 'react';
import Button from './Button';

const Note = ({note, toogleImportance, remove}) => {
    const label = note.important ? 'make not important' : 'make important';
    return (
        <li><span className={note.important ? 'note-black' : 'note-grey'}>{note.content}</span>
        <Button action={() => toogleImportance(note.id)} text={label} controller={note.important} />
        <Button action={() => {if(window.confirm('Delete note ' + note.content + '?')){remove(note.id)}}} text={'delete'} controller={'delete'} />
        </li>
    );
}

export default Note;
