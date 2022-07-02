import React from 'react';
import Statistic from './Statistic';

const Statistics = ({good, neutral, bad, all, average, positive}) => {
    return (
        <div>
        <h1>statistics</h1>
        {good === 0 && neutral === 0 && bad === 0 ? 
            <>
                <p>No feedback given</p>
            </> : <>
                <table>
                    <tbody>
                        <tr><Statistic text='good' stat={good} /></tr>
                        <tr><Statistic text='neutral' stat={neutral} /></tr>
                        <tr><Statistic text='bad' stat={bad} /></tr>
                        <tr><Statistic text='all' stat={all} /></tr>
                        <tr><Statistic text='average' stat={average} /></tr>
                        <tr><Statistic text='positive' stat={positive} text2='%' /></tr>
                    </tbody>
                </table> 
            </>
        }
        </div>
    );
}

export default Statistics;
