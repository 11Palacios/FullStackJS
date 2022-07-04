import React from 'react';

const Filter = (props) => {
    return (
        <>
            filter shown with <input onChange={props.handleFilter} id='inputFilter' />
        </>
    );
}

export default Filter;
