import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import Form from './components/Form';
import NoteList from './components/NoteList';
import Title from './components/Title';
import noteService from './services.js/notes';
import './App.css';

const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('a new note...')
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
      noteService.getAll()
      .then(notes => {
        setNotes(notes)
      })
    }, [])
    

    const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

    const addNote = (e) => {
        e.preventDefault()
        const noteObject = {
          content: newNote,
          date: new Date().toISOString(),
          important: Math.random() < 0.5
        }

        noteService
        .create(noteObject)
        .then(returnedNote => {        
          setNotes(notes.concat(returnedNote))
        })
        document.getElementById('inputNote').value=('')
        setNewNote('a new note...')
    }

    const handleNoteChange = (e) => {
        setNewNote(e.target.value)
    }

    const toogleShow = () =>{
      setShowAll(!showAll)
    }

    const toogleImportanceOf = (id) => {
      const note = notes.find(n=> n.id === id)
      const changedNote = {...note, important: !note.important}
      noteService
      .update(id, changedNote)
      .then(returnedNote => {        
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        setErrorMessage(`the note was already deleted from server`)
        setTimeout(() => {setErrorMessage(null)}, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
    }

    const remove = (id) => {
      let newNotes = [...notes]
      let filtered = newNotes.filter(note => note.id !== id)
      noteService
      .remove(id)
      .then(
        setNotes(filtered)
      )
      .catch(error => {
        setErrorMessage(`the note was already deleted from server`)
        setTimeout(() => {setErrorMessage(null)}, 5000)
      }
      )
    }

    return (
      <div className='main'>{errorMessage !== null ?  <div class='error'>{errorMessage}</div> : <></>}
        <Title text='Notes' className='title'/>
        <Button action={toogleShow} controller={showAll} text={'show'}/>
        <NoteList notes={notesToShow} toogleImportance={toogleImportanceOf} remove={remove}/>
        <Form addNote={addNote} newNote={newNote} handleNoteChange={handleNoteChange} />
      </div>
    );
  }

export default App;
