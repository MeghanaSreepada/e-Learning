import React from 'react';
import CourseList from './CourseList';
import './App.css';

function App() {
  const courses = [
    {
      id: 1,
      title: 'React Basics',
      description: 'Learn the basics of React',
    },
    {
      id: 2,
      title: 'React Hooks',
      description: 'Learn how to use React Hooks',
    },
    {
      id: 3,
      title: 'React Router',
      description: 'Learn how to use React Router',
    },
  ];

  return (
    <div className="App">
      <h1>My Courses</h1>
      <CourseList courses={courses} />
    </div>
  );
}

export default App;


