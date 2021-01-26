import React, { useState } from "react";

const CoursesPage = () => {
  const [course, setCourse] = useState({ title: "" });

  const handleChange = (event) => {
    const course = { title: event.target.value };
    setCourse(course);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(course.title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type="text" onChange={handleChange} value={course.title} />
      <input type="submit" value="Save" />
    </form>
  );
};

export default CoursesPage;
