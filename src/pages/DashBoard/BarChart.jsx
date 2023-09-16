import "./Bar.css"
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Surface,
  Symbols 
} from "recharts";
import "./BarChart.css"
export default function Chart(){
  const [data, setdata] = useState(null);

    const renderCusomizedLegend = (props) => {
        const { payload } = props
        return (
          <div className="customized-legend flex justify-between">
           <div>
                <h4 className="text-xl font-bold">Activities</h4>
                <p className="text-lightText pt-1">May - June 2021</p>
           </div>
           <div className="flex gap-8 flex-row-reverse"> 
            {
                 payload.map((entry) => {
                   const { dataKey, color } = entry

                   return (
                       <span className="legend-item flex items-center gap-2">
                         <Surface width={10} height={10} viewBox="0 0 10 10">
                           <Symbols cx={5} cy={5} type="circle" size={50} fill={color} />
                         </Surface>
                         <span className=" text-lg" >{dataKey}</span>
                       </span>
                   )
                 })
            }</div>
          </div>
        )
      }

      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('http://localhost:4000/api/chart', {
              headers: {
                'Content-Type': 'application/json',
              },
            });
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setdata(data);
          } catch (error) {
            console.error('Error fetching chart data:', error);
          }
        }

        fetchData();
      }, []); 
      


      const interval = 100;
      const domain = [0, 500];
      const ticks = [];
      for (let i = domain[0]; i <= domain[1]; i += interval) {
        ticks.push(i);
      }


    return data ?  (<ResponsiveContainer>
    <BarChart id="chart" data={data}>
      <CartesianGrid stroke="#EAEAEA" vertical={false}/>
      <XAxis stroke="#EAEAEA"  tick={{ fill: '#858585' }} dataKey="name" tickLine={false}   dot={false}/>
      <YAxis   type="number"
                axisLine={false}
                tickLine={false}
                domain={domain}
                ticks={ticks}/>
      <Tooltip />
      <Legend  content={renderCusomizedLegend}  layout="horizontal" verticalAlign="top" align="right" />
      <Bar  dataKey="User" barSize={40} radius={3} fill="#98D89E" />
      <Bar dataKey="Guest" barSize={40} radius={3} fill="#EE8484" />
    </BarChart>
  </ResponsiveContainer>) : null;
}