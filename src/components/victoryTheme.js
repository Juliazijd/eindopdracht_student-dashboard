const chartTheme = {
    axis: {
      style: {
        grid: {
          stroke: "none",
        },
        axisLabel: {
          padding: 30,
          fill: "white"
        },
        tickLabels: {
          fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
          fontSize: 8,
          letterSpacing: "normal",
          padding: 10,
          fill: "#405769",
        },
      },
    },

    bar: {
      style: {
        data: {
          fill: "#4E8CC8",
          strokeWidth: 0.5,
        },
        label: {
          fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
          fontSize: 8,
          padding: 0,
          fill: "#405769",
          stroke: "transparent",
        },
      },
    },
    
    legend: {
      gutter: 20,
      orientation: "horizontal",
      style: {
        data: {
          type: "square",
        },
        labels: {
          fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
          fontSize: 8,
          fill: "#405769",
        },
      },
    },

    
  };

  
  export default chartTheme;
  