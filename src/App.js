import React, { useState, useEffect } from 'react';
import CourseList from './CourseList';
import './App.css';

function App() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5000/api/courses');
        const data = await response.json();
        setCourses(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>My Courses</h1>
      <CourseList courses={courses} isLoading={isLoading} error={error} />
    </div>
  );
}

export default App;




