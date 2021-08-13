import React, { useState } from 'react';
import StudentFilter from '../components/StudentFilter/StudentFilter';
import ResultFilter from '../components/ResultFilter/ResultFilter';
import ResultChart from '../components/ResultChart/ResultChart';
import resultFilterOptions from '../constants/resultFilterOptions';
import studentData from '../Data';

function Results() {
    const [activeStudent, setActiveStudent] = useState('All students');
    const [activeResultFilter, setActiveResultFilter] = useState(resultFilterOptions.DIFFICULTY_ENJOYMENT);

    const studentsWithoutDubs = new Set(studentData.map(({studentName}) => studentName));
    const students = Array.from(studentsWithoutDubs);

    return (
        <div className='results'>
            <h1>Results</h1>
            <p>Choose which results you would like to see!</p>
            <StudentFilter students={students} activeStudent={activeStudent} setActiveStudent={setActiveStudent} />
            <ResultFilter activeResultFilter={activeResultFilter} setActiveResultFilter={setActiveResultFilter} />
            <ResultChart activeStudent={activeStudent} activeResultFilter={activeResultFilter} data={studentData} />
        </div>
    )
}

export default Results;
