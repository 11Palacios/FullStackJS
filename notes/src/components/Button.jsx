import React from 'react';

const Button = ({action, showAll}) => {
    return (
        <div>
            <button onClick={action}>show {showAll ? 'important' : 'all'}</button>
        </div>
    );
}

export default Button;
