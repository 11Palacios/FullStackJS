import React from 'react';

const Statistic = ({text, stat, text2}) => {
    return (
        <>
            <td>{text}</td>
            <td>{stat}</td>
            <td>{text2}</td>
        </>
    );
}

export default Statistic;
