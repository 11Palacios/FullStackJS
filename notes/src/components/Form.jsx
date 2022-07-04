import React from 'react';

const Form = ({addNote, handleNoteChange, newNote}) => {
    return (
        <form onSubmit={addNote}>
            <input placeholder={newNote} id='inputNote' onChange={handleNoteChange} />
            <button type='submit'>save</button>
        </form>
    );
}

export default Form;
