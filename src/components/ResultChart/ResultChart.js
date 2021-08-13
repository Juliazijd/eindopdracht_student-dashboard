import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel, VictoryGroup, VictoryLegend, VictoryTooltip } from "victory";
import studentData from "../../Data";
import chartTheme from "../victoryTheme";
import resultFilterOptions from "../../constants/resultFilterOptions";

const getAssignmentsWithLabels = (data) => {
  const assignmentsWithLabels = data.map(data => {
    return {...data, label: data.assignment}
  });
  const assignmentsWithoutDubs = new Set(assignmentsWithLabels.map((data) => data.assignment && data.label));
  return Array.from(assignmentsWithoutDubs);
}

const calculateAverages = (students, assignment, type) => {
  return students.reduce((sum, data) => {
    if (data.assignment !== assignment) return sum;
    return sum + data[type];
  }, 0) / students.filter((data) => assignment === data.assignment).length;
}

const getBarData = (students, assignments, type) => {
  return assignments.map((assignment, index) => {
    return {
      index,
      label: assignment,
      average: calculateAverages(students, assignment, type)
    }
  })
}

export default function ResultChart({ data, activeResultFilter, activeStudent }) {
  const assignments = getAssignmentsWithLabels(data);

  const filteredStudents = activeStudent === "All students" ? studentData : studentData.filter(student => {
    return student.studentName === activeStudent;
  });

  const tooltipOptions = {
    flyoutHeight: 25,
    cornerRadius: 5,
    pointerLength: 20,
    flyoutStyle: {
        stroke: "#868C97",
        strokeWidth: 0,
        fill: "#FFFFFF"
    },
    style: {
        fill: "#868C97",
        fontSize: 10,
        fontWeight: 400,
        textAnchor: "middle",
        padding: 10,
    },
  }

  const assignmentAveragesDifficulty = getBarData(filteredStudents, assignments, resultFilterOptions.DIFFICULTY);
  const assignmentAveragesEnjoyment = getBarData(filteredStudents, assignments, resultFilterOptions.ENJOYMENT);

  const activeAssignmentAverages = activeResultFilter === resultFilterOptions.DIFFICULTY ? assignmentAveragesDifficulty : assignmentAveragesEnjoyment;
  const difficultyBarStyle = { data: { fill: "#4E8CC8" }, labels: { fontSize: 7 } }
  const enjoymentBarStyle = { data: { fill: "#FFFF" }, labels: { fontSize: 7 } }

  return (
      <VictoryChart
        theme={chartTheme}
        domainPadding={{x: [20, 0]}}
        width={800}
      >
         <VictoryLegend
          x={600}
          y={30}
          data={[
            { name: "Difficulty", symbol: { fill: "#4E8CC8" } },
            { name: "Enjoyment", symbol: { fill: "#FFFF" } },
          ]}
        />
        <VictoryAxis
          tickLabelComponent={
            <VictoryLabel
                style={{fontSize: 4}}
                dy={-22}
                y={270}
                verticalAnchor={"start"}
                textAnchor={"end"}
                angle={-40}
              />
            }
          tickFormat={assignments}
          label="Assignments"
        />
        <VictoryAxis
          dependentAxis
          offsetX={45}
          label="Score"
          tickFormat={(x) => (`${x}`)}
        />

        {activeResultFilter === resultFilterOptions.DIFFICULTY_ENJOYMENT ? (
          <VictoryGroup 
            offset={5}
            colorScale={"qualitative"}
            labels={assignments}
            labelComponent={<VictoryTooltip {...tooltipOptions} />}
          >
            <VictoryBar
              style={difficultyBarStyle}
              data={assignmentAveragesDifficulty}
              x="index"
              y="average"
            />
            <VictoryBar
              style={enjoymentBarStyle}
              data={assignmentAveragesEnjoyment}
              x="index"
              y="average"
              label={assignments}
            />
          </VictoryGroup>) : (
          <VictoryBar
            style={activeResultFilter === "difficulty" ? difficultyBarStyle : enjoymentBarStyle}
            data={activeAssignmentAverages}
            x="index"
            y="average"
            labels={assignments}
            labelComponent={<VictoryTooltip {...tooltipOptions} />}
          />
        )}
      </VictoryChart>
  );
};

