import React from 'react';

const SearchInput = ({handleInput}) => {
    return (
        <div>
            <input type='text' onChange={handleInput}/>
        </div>
    );
}

export default SearchInput;
