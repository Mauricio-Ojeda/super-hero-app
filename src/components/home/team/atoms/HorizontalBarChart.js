import React from 'react';
import { Bar } from 'react-chartjs-2';


const HorizontalBarChart = ( { data } ) => {

     
        const options = {
        indexAxis: 'y',
        maintainAspectRatio: true,
        fontColor:'#fff',               
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
