import React from 'react';

const Content = (props) => {
    return (
        <>
        
           <p>{props.part.name} {props.part.exercises}</p>

        </>
    );
}

export default Content;
