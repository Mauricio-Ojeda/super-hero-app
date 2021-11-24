import React from 'react';
import { Bar } from 'react-chartjs-2';


const HorizontalBarChart = ( { powerstats } ) => {

        // Destructuring powerstats
        const { intelligence, strength, speed, durability, power, combat } = powerstats;

        const data = {
        labels: ['Intel', 'Str', 'Speed', 'Durab', 'Pw', 'Cmbt'],
        datasets: [
            {
            data: [ intelligence, strength, speed, durability, power, combat ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            },
        ],
        };

        const options = {
        indexAxis: 'y',
        maintainAspectRatio: true,
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
            bar: {
            borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
            display: true,
            text: 'Power Stats',
            },
        },
        
        };

    return (
        <div>
            <Bar 
                data={ data }
                options={ options }
                height={ 280}
                width= {278}                
            />
        </div>
    )
}

export default HorizontalBarChart
