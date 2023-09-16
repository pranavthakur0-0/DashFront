import "./Donut.css"
import React from "react";
import {
  Legend,
  ResponsiveContainer,
  Surface,
  Symbols ,
  PieChart,
  Pie,
  Cell
} from "recharts";

const data = [
  { name: "Basic Tees", value: 400, fill: "#98D89E" },
  { name: "Custom Short Pants", value: 300, fill: "#F6DC7D" },
  { name: "Super Hoodies", value: 300, fill: "#EE8484" },
];

const Example = () => {

  const renderCusomizedLegend = (props) => {
    const { payload } = props
    return (
        <div className="flex gap-12 flex-col flex-1 font-secondary"> 
         {
              payload.map((entry) => {
                const {payload, value, color } = entry

                return (
                    <span className="legend-item flex items-center gap-4">
                      <Surface width={10} height={10} viewBox="0 0 10 10">
                        <Symbols cx={5} cy={5} type="circle" size={50} fill={color} />
                      </Surface>
                      <div className="relative">
                      <span className=" text-xl font-semibold " >{value}</span>
                      <span className=" absolute top-8 text-lightText text-lg left-0">{payload.percent * 100}%</span>
                      </div>
                    
                    </span>
                )
              })
         }</div>
    )
  }


  return (
<>
<header className="px-10 pt-3 relative">
    <div className="absolute flex justify-between w-full left-0 px-9 items-center">
        <span className="text-[1.7rem] font-semibold">Top products</span> 
        <span>May - June 2021</span>
    </div>
</header>
<ResponsiveContainer>
    <PieChart>
        <Legend  
          content={renderCusomizedLegend}           
          iconType="circle"
          layout="vertical"
          align="right"
          verticalAlign="middle" />
      <Pie
        data={data}
        startAngle={180}
        endAngle={-180}
        cornerRadius={100}
        innerRadius="65%" 
        outerRadius="85%"
        paddingAngle={-15}
        labelLine={false}
        isAnimationActive={true}
        stroke="0"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
      </Pie>
    </PieChart>
    </ResponsiveContainer>
    </>
  );
};


export default Example;
