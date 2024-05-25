import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function Statistics() {
    const [selectedName, setSelectedName] = useState('');
    const [counter, setCounter] = useState(0);
    const [weeklyData, setWeeklyData] = useState({
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: []
    });

    useEffect(() => {
        const name = localStorage.getItem('selectedName');
        const data = localStorage.getItem('selectedData');
        if (name && data) {
            const parsedData = JSON.parse(data);
            setSelectedName(name);
            setCounter(parsedData.counter);
            setWeeklyData({
                monday: parsedData.monday_data,
                tuesday: parsedData.tuesday_data,
                wednesday: parsedData.wednesday_data,
                thursday: parsedData.thursday_data,
                friday: parsedData.friday_data
            });
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
            {
                label: 'Min',
                data: [
                    weeklyData.monday[0],
                    weeklyData.tuesday[0],
                    weeklyData.wednesday[0],
                    weeklyData.thursday[0],
                    weeklyData.friday[0]
                ],
                backgroundColor: 'rgba(255, 99, 132, 0.6)'
            },
            {
                label: 'Average',
                data: [
                    weeklyData.monday[1],
                    weeklyData.tuesday[1],
                    weeklyData.wednesday[1],
                    weeklyData.thursday[1],
                    weeklyData.friday[1]
                ],
                backgroundColor: 'rgba(54, 162, 235, 0.6)'
            },
            {
                label: 'Max',
                data: [
                    weeklyData.monday[2],
                    weeklyData.tuesday[2],
                    weeklyData.wednesday[2],
                    weeklyData.thursday[2],
                    weeklyData.friday[2]
                ],
                backgroundColor: 'rgba(75, 192, 192, 0.6)'
            }
        ]
    };

    return (
        <div>
            <h1>Statistics Page</h1>
            <p>Selected Name: {selectedName}</p>
            <p>Counter: {counter}</p>
            <div style={{ width: '600px', height: '400px' }}>
                <Bar data={data} />
            </div>
        </div>
    );
}

export default Statistics;
