import React from 'react';
import Button from './Button';

const Form = ({addNote, handleNoteChange, newNote}) => {
    return (
        <form onSubmit={addNote}>
            <input placeholder={newNote} id='inputNote' onChange={handleNoteChange} />
            <Button type={'submit'} text={'save'} controller={'form'}/>
        </form>
    );
}

export default Form;
