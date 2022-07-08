import React from 'react';

const ListItem = ({person, remove}) => {
    return (
            <p>{person.name} {person.number} <button onClick={() => {if(window.confirm('delete ' + person.name + '?')){remove(person.id)}}}>delete</button></p>
    );
}

export default ListItem;
