import React from "react";
import Paper from "@mui/material/Paper";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { Row } from "../utils/types";

interface ChartProps {
  data: Row[];
  tag: string;
}

export default function Chart({ data, tag }: ChartProps) {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden", padding:"5px" }}>
      <ResponsiveContainer width="99%" height={400}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="month" />
          <YAxis domain={[(dataMin: number) => Math.round(0.95 * dataMin) ,(dataMax: number)=> Math.round(1.05 * dataMax)]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={tag} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}
