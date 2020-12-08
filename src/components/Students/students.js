import React from "react";
import { students } from "../../data";
import "./students.css";

export default function Students({ value }) {
  let studentsList = students;

  if (value) {
    studentsList = students.filter((student) => student.name.includes(value));
  }

  return (
    <div className="student">
    { studentsList === undefined && (<p>no results</p>) }
      {(studentsList && studentsList.length) ? studentsList.map((student) => {
        return (
          <div className="studentBox" key={student.id}>
            <p className="nameColor">Name : {student.name}</p>
            <p className="ageColor">Age : {student.age}</p>
            <p className="courseColor">Courses : {student.course}</p>
          </div>
        );
      }) : <div><p className='notFound'>No results found!</p></div>}
    </div>
  );
}
