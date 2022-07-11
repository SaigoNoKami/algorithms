
const labels = [
    'greedy100',
    'greedy500',
    'greedy500',
    'prob100',
    'prob500',
    'prob1000',
    'floyd100',
    'floyd500',
    'floyd1000',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'algorithms',
      backgroundColor: ['red', 'red', 'red', 'green', 'green', 'green', 'yellow', 'yellow', 'yellow'],
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 3, 4, 0.2, 1.9, 9.8, 64],
    }]
  };
  const config = {
    type: 'bar',
    data: data,
    options: {responsive: false, scales: {
      yAxes: [{
        barPercentage: 0.5,
        gridLines: {
          display: false
        }
      }],
      xAxes: [{
        gridLines: {
          zeroLineColor: "black",
          zeroLineWidth: 2
        },
        ticks: {
          min: 0,
          max: 80,
          stepSize: 1
        },
        scaleLabel: {
          display: true,
          labelString: "Density in kg/m3"
        }
      }]
    },
    elements: {
      rectangle: {
        borderSkipped: 'left',
      }
    }}
  };