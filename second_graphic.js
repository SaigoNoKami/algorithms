const labels = [
    'greedy',
    'prob',
    'floyd',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'algorithms',
      backgroundColor: ['red', 'green', 'yellow'],
      borderColor: 'rgb(255, 99, 132)',
      data: [75, 93.66748519427995, 100],
    }]
  };
//49918  5595
  const config = {
    type: 'bar',
    data: data,
    options: {responsive: false}
  };