import React from 'react';
import MyChartOne from '../MyChartOne/MyChartOne';

const Dashboard = () => {
    return (
        <div>
            <h1 style={{'color': 'blue'}}>Explore Our Business Growth</h1>
            <MyChartOne></MyChartOne>
        </div>
    );
};

export default Dashboard;