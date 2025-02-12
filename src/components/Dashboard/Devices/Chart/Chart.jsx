import React from "react";
import { PieChart, Pie, Tooltip, Cell, Label } from "recharts";
import classes from "./Chart.module.css";
import { Text } from "components/common";
const Chart = ({ data }) => {
  const COLORS = ["#6661DE", "#4CB266", "#FEAD34"];

  const TEXT_COLORS = ["#fff", "#fff", "#000"];

  return (
    <div className={classes.wrapper}>
      <PieChart
        width={200}
        height={200}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
          label={({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
            const RADIAN = Math.PI / 180;
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);
            return (
              <text
                x={x}
                y={y}
                fill={TEXT_COLORS[index % TEXT_COLORS.length]}
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="Inter"
                fontSize={12}
              >
                {`${data[index].value.toFixed(1)}%`}
              </text>
            );
          }}
        >
          <Label
            content={({ viewBox }) => {
              const { cx, cy } = viewBox;
              return (
                <g>
                  <text
                    x={cx}
                    y={cy - 8}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={16}
                    fontWeight="bold"
                    fontFamily="Inter"
                    fill="#fff"
                  >
                    8 Device
                  </text>
                  <text
                    x={cx}
                    y={cy + 12}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={12}
                    fontFamily="Inter"
                    fill="rgba(255,255,255,.5)"
                  >
                    Connected
                  </text>
                </g>
              );
            }}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="custom-tooltip">
                    <p className="label">{`${payload[0].name}: ${payload[0].value}%`}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              strokeWidth={0}
              cornerRadius={10}
            />
          ))}
        </Pie>
      </PieChart>
      <div className={classes.legendContainer}>
        {data.map((el, i) => (
          <div className={classes.item} key={i} style={{ "--bg": COLORS[i] }}>
            <Text base className={classes.value}>
              {el.value}%
            </Text>
            <Text xs className={classes.name} opacity50>
              {el.name}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart;
