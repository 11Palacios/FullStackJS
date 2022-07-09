import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Form from './components/Form';
import List from './components/List';
import phoneService from './services.js/persons';
import './App.css';

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState(null)
    const [newNumber, setNewNumber] = useState(null)
    const [filter, setFilter] = useState('')
    const [successMessage, setSuccessMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    
    useEffect(() => {
      phoneService.getAll()
      .then(persons => {
        setPersons(persons)
      })
    }, [])
    //id max
        const id_max = () => {
            let max = 0
            persons.map(person => {
                if(person.id > max){
                    max = person.id
                }
            })
            return max + 1
        }
    //
    const submitForm = (e) => {
        e.preventDefault();
        const foundN = persons.find(element => element.name === newName);
        if(foundN === undefined){
        let prePersons = [...persons]
        prePersons.push({name:newName, number:newNumber})
        //
            let obj = {name:newName, number: newNumber, id:id_max()}
            phoneService
            .create(obj)
            .then(
                setPersons(prePersons),
                setNewName(null),
                setNewNumber(null),
                setSuccessMessage(`${newName} added successfully to phonebook`),
                setTimeout(() => {setSuccessMessage(null)},5000)
            )
        //
        
        }else{
            if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
                replace(newName, newNumber)
            }
        }
        
        document.getElementById('inputName').value=('')
        document.getElementById('inputNumber').value=('')

    }
    const replace = (newName, newNumber) => {
        let pers
        persons.find(person => {
            if(person.name === newName){
                pers = person
            }
        })
        let newPersons = [...persons]
        newPersons.map(person =>{
                if(person.id === pers.id){
                    person.number = newNumber
                }
            })
        phoneService
        .update(pers.id, pers)
        .then(
            setPersons(newPersons)
        )
        .catch(
            setErrorMessage(`${newName} failed to update, please, try again`),
            setTimeout(() => {setErrorMessage(null)},5000)
        )
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
    const remove = (id) => {
        let newPersons = []
        phoneService.remove(id)
        .then(
        persons.map(person => {
            if(person.id !== id){
             newPersons.push(person)   
            } 
        }),
        setPersons(newPersons)
        )
        .catch(
            setErrorMessage(`Contact already deleted`),
            setTimeout(() => {setErrorMessage(null)},5000)
        )
        
    }

    return (
        <div>
            <h2>Phonebook</h2>
            {successMessage !== null ? <div className='success'>{successMessage}</div> : <></>}
            {errorMessage !== null ? <div className='error'>{errorMessage}</div> : <></>}
            <Filter handleFilter={handleFilter} />
            <Form handleInput={handleInput} handleNumber={handleNumber} submitForm={submitForm} />
            <List persons={persons} filter={filter} remove={remove} />
        </div>
    );
}

export default App;
