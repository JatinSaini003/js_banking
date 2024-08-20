"use client"
import React from 'react'
import { Chart, ArcElement, Tooltip, Legend } from "chart.js"
Chart.register(ArcElement);
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const accountNames = accounts.map((a) => a.name);
    const balance = accounts.map((a) => a.currentBalance)
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: balance,
                backgroundColor: ['#0747b6', '#2265d8', '#554b79']
            }
        ],
        labels: accountNames
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