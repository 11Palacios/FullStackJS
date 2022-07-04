import React from 'react';

const Form = (props) => {
    return (
        <>
        <p>add new</p>
        <form onSubmit={props.submitForm}>
            <div>
                name: <input onChange={props.handleInput} id='inputName' />
                number: <input onChange={props.handleNumber} id='inputNumber' />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
        </>
);
}

export default Form;
