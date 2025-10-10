
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
  Bar,
  ComposedChart,
  Area
} from "recharts";
import useApps from '../hooks/useApps';



const Rechart = () => {
    const {apps}= useApps()
    console.log(apps)

    
    return (
      <ResponsiveContainer width="100%" height="100%">
               <ComposedChart
                 
                 width={500}
                 height={400}
                 data={apps}
                
               >
                 <CartesianGrid stroke="#f5f5f5" />
                 <XAxis type="downloads
" />
                 <YAxis dataKey="downloads
" type="category" scale="band" />
                 <Tooltip />
                 <Legend />
                 <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                 <Bar dataKey="downloads
" barSize={20} fill="#413ea0" />
                 <Line dataKey="downloads" stroke="#ff7300" />
               </ComposedChart>
             </ResponsiveContainer>
    );
};

export default Rechart;