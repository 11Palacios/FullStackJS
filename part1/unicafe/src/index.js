import React , { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Button from './components/Button';
import Statistics from './components/Statistics';
import './index.css';


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

    // calculation
    const all = good + neutral + bad;
    const average = (good - bad)/all;
    const positive = (good/all)*100;

  const addGood = () => {
    setGood(good + 1);
  }

  const addNeutral = () => {
    setNeutral(neutral + 1);
  }

  const addBad = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button action={addGood} text='good' />
        <Button action={addNeutral} text='neutral' />
        <Button action={addBad} text='bad' />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
