import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { getStoredDonatedData } from "../utility/localstorate";

const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};
const Statistics = () => {
  const allDonationData = useLoaderData();
  const [donatedData, setDonatedData] = useState([]);

  const remainingDonation = allDonationData.filter(
    (item) => !donatedData.includes(item.id)
  );

  useEffect(() => {
    const storedData = getStoredDonatedData();
    setDonatedData(storedData);
    console.log(storedData);
  }, []);

  const data = [
    { name: "Group A", value: remainingDonation.length },
    { name: "Group B", value: donatedData.length },
  ];
  return (
    <div className="px-4 md:px-10 mb-10 md:mb-16">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-col md:flex-row gap-5 md:gap-14 justify-center">
        <div className="flex items-center gap-4 mx-auto md:mx-0">
          <p className="text-lg">Your Donation</p>
          <hr className="bg-[#00C49F] h-3 w-24" />
        </div>
        <div className="flex items-center gap-4 mx-auto md:mx-0">
          <p className="text-lg">Total Donation</p>
          <hr className="bg-[#FF444A] h-3 w-24" />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
