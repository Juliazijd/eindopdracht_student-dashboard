import React from "react";
import "./StudentFilter.css";

function StudentFilter({students, activeStudent, setActiveStudent, handleChange}) {

  return (
      <div className="student-filter" >
          <select value={activeStudent} onChange={(e) => {
            handleChange(e.target.value)
            setActiveStudent(e.target.value)
          }}>
            <option value="All students">All students</option>
            {students.map((student) => {
              return <option key={student} value={student}>{student}</option>
            })}
          </select>
      </div>
  )
}

export default StudentFilter;
