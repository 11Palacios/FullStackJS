import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ({course}) => {
    const sum = course.parts.reduce(
        (a, b) => a + b.exercises,
        0
      );

    return (
        <div>
        <Header text={course.name} />
        {course.parts.map(part =>(
            <Content key={part.id} part={part}/>
        ))}
        <Total sum={sum}/>
        </div>
    );
}

export default Course;
