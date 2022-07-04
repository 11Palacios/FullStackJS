import React, { useState } from 'react';
import Button from './components/Button';
import Form from './components/Form';
import NoteList from './components/NoteList';
import Title from './components/Title';

const App = (props) => {
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState('a new note...')
    const [showAll, setShowAll] = useState(true)

    const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

    const addNote = (e) => {
        e.preventDefault()
        const noteObject = {
          content: newNote,
          date: new Date().toISOString(),
          important: Math.random() < 0.5,
          id: notes.length + 1,
        }
        setNotes(notes.concat(noteObject))
        document.getElementById('inputNote').value=('')
        setNewNote('a new note...')
    }

    const handleNoteChange = (e) => {
        setNewNote(e.target.value)
    }

    const toogleShow = () =>{
      setShowAll(!showAll)
    }

    return (
      <div>
        <Title text='Notes' />
        <Button action={toogleShow} showAll={showAll} />
        <NoteList notes={notesToShow}/>
        <Form addNote={addNote} newNote={newNote} handleNoteChange={handleNoteChange} />
      </div>
    );
  }

export default App;
