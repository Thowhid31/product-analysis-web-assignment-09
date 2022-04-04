import React from 'react';
import { Area, AreaChart, Line, LineChart, XAxis, YAxis } from 'recharts';
import './MyCharOne.css'

const MyChartOne = () => {
    const data = [
            {
                "month": "Mar",
                "investment": 100000,
                "sell": 241,
                "revenue": 10401
            },
            {
                "month": "Apr",
                "investment": 200000,
                "sell": 423,
                "revenue": 24500
            },
            {
                "month": "May",
                "investment": 500000,
                "sell": 726,
                "revenue": 67010
            },
            {
                "month": "Jun",
                "investment": 500000,
                "sell": 529,
                "revenue": 40405
            },
            {
                "month": "Jul",
                "investment": 600000,
                "sell": 601,
                "revenue": 50900
            },
            {
                "month": "Aug",
                "investment": 700000,
                "sell": 670,
                "revenue": 61000
            }
    ]
    return (
        <div className='my-chart-container'>
            <div className='chart-one'>
                <h3>Investment vs Revenue</h3>
            <LineChart width={600} height={400} data={data}>
            <Line dataKey={'revenue'}></Line>
            <Line dataKey={'investment'}></Line>
            <XAxis dataKey={'month'}></XAxis>
            <YAxis></YAxis>
        </LineChart>
            </div>
            <div>
            <h3>Investment vs Revenue vs Sell</h3>
                <AreaChart width={600} height={400} data={data}>
                    <Area dataKey={'investment'}></Area>
                    <Area dataKey={'revenue'}></Area>
                    <Area dataKey={'sell'}></Area>
                    <XAxis dataKey={'month'}></XAxis>
            <YAxis></YAxis>
                </AreaChart>
            </div>
        </div>
    );
};

export default MyChartOne;