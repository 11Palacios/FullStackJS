import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Form from './components/Form';
import List from './components/List';
import axios from 'axios';

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState(null)
    const [newNumber, setNewNumber] = useState(null)
    const [filter, setFilter] = useState('')
    
    useEffect(() => {
      axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
    }, [])
    


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
