import React from 'react';
import ReactDOM from 'react-dom/client';
import Content from './components/Content';
import Header from './components/Header';
import Total from './components/Total';
import './index.css';

const App = () => {
  const course = 'Half Stack application development'
  const parts = [{
    name: 'Fundamentals of React',
    exercises: 10
  },
   {
    name: 'Using props to pass data',
    exercises: 7
  },
   {
    name: 'State of a component',
    exercises: 14
  }]
  let sum = 0;
  parts.map(part => sum+= part.exercises)

  return (
    <div>
      <Header course={course} />
      {parts.map((part, index) => <Content key={index} part={part} />)}
      <Total sum={sum} />  
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
