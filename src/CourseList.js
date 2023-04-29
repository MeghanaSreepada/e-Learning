import React from 'react';

function CourseList(props) {
  const { courses } = props;

  return (
    <ul className="courseList">
      {courses.map(course => (
        <li key={course.id}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <button>Enroll</button>
        </li>
      ))}
    </ul>
  );
}

export default CourseList;
