import React, { useState } from 'react';
import Filter from './components/Filter';
import Form from './components/Form';
import List from './components/List';

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
      ])
    const [newName, setNewName] = useState(null)
    const [newNumber, setNewNumber] = useState(null)
    const [filter, setFilter] = useState('')
    const submitForm = (e) => {
        e.preventDefault();
        const foundN = persons.find(element => element.name === newName);
        if(foundN === undefined){
        let prePersons = [...persons]
        prePersons.push({name:newName, number:newNumber})
        setPersons(prePersons)
        setNewName(null)
        setNewNumber(null)
        /*setNewPerson(null)*/ 
        }else{
            window.alert(`${newName} is already added to phonebook`)
        }
        
        document.getElementById('inputName').value=('')
        document.getElementById('inputNumber').value=('')

    }

    const handleInput = (e) => {
        setNewName(e.target.value)
    }
    const handleNumber = (e) => {
        setNewNumber(e.target.value)
    }
    const handleFilter = (e) => {
        setFilter(e.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter handleFilter={handleFilter} />
            <Form handleInput={handleInput} handleNumber={handleNumber} submitForm={submitForm} />
            <List persons={persons} filter={filter} />
        </div>
    );
}

export default App;
