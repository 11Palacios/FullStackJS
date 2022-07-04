import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
    return (
        <>
            <h2>Numbers</h2>
            {props.persons.filter(person => person.name.toLowerCase().includes(props.filter.toLowerCase())).map((person, index) => (
                <ListItem key={index} person={person}/>
            ))}
        </>
    );
}

export default List;
