import React from 'react';

const Button = ({action, controller, text, type}) => {
    return (
        <>
            <button onClick={action} type={type} className=
            {
                //className
                controller === 'form' ?
                    'button button-form' :
                controller === 'delete'?
                    'button button-delete' :
                text === 'make important' ?
                    'button button-important' :
                text === 'make not important' ?
                    'button button-not-important' :
                controller ? 'button button-orange' : 'button button-green'
                
                }>
                {
                //text
                    text==='show' ? 
                    controller ? `${text} important` : `${text} all` 
                : controller === 'form' ?
                    'add'
                : controller === 'delete' ?
                    'delete'
                :
                text
                }
            </button>
        </>
    );
}

export default Button;
