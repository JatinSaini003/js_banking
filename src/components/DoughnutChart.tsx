"use client"
import React from 'react'
import { Chart, ArcElement, Tooltip, Legend } from "chart.js"
Chart.register(ArcElement);
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [12500, 25000, 37500],
                backgroundColor: ['#0747b6', '#2265d8', '#554b79']
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']
    }
    return (
        <Doughnut data={data} options={{
            cutout: '60%',
            plugins: {
                legend: {
                    display: true
                }
            }
        }} />
    )
}

export default DoughnutChart