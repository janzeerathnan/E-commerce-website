// Get the chart canvas
const chartCanvas = document.getElementById('chart');

// Create a new chart instance
const chart = new Chart(chartCanvas, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Sales',
            data: [10, 20, 30, 40, 50],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Sales Chart'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});