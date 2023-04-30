import React from 'react';

function CourseList(props) {
  const { courses, isLoading, error } = props;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul className="courseList">
      {courses.map(course => (
        <li key={course.id}>
          <h2>{course.title}</h2>
          <p>Author: {course.author}</p>
          <p>Duration: {course.duration}</p>
          <button>Enroll</button>
        </li>
      ))}
    </ul>
  );
}

export default CourseList;
