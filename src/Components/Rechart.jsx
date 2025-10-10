
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";
import useApps from '../hooks/useApps';



const Rechart = () => {
    const {apps}= useApps()
    console.log(apps)

    
    return (
        <div className="w-full h-96 bg-white rounded-md p-4">
      <h1 className="text-xl font-bold mb-3">User Growth Chart</h1>
     
    </div>
    );
};

export default Rechart;