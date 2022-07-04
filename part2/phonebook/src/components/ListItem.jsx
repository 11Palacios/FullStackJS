import React from 'react';

const ListItem = ({person}) => {
    return (
            <p>{person.name} {person.number}</p>
    );
}

export default ListItem;
