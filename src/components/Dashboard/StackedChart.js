import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

export default function StackedChart() {
  const boards = useSelector((state) => state.taskManager.boards);

  const getValues = (boards) => {
    let values = [];
    let data = { title: "", completed: "", incomplete: "" };

    for (let i = 0; i < boards.length; i++) {
      let board = boards[i];
      let completed = board.cards.filter(
        (card) => card.completed === true
      ).length;
      let incomplete = board.cards.length - completed;
      data = {
        title: board.title,
        completed: completed,
        incomplete: incomplete,
      };
      values.push(data);
    }
    return values;
  };
  const data = getValues(boards);

  return (
    <>
      {data[0].completed === 0 &&
      data[0].incomplete === 0 &&
      data[1].completed === 0 &&
      data[1].incomplete === 0 &&
      data[2].completed === 0 &&
      data[2].incomplete === 0 &&
      data[3].completed === 0 &&
      data[3].incomplete === 0 ? (
        <Box display="flex" justifyContent="center" sx={{ mt: 10 }}>
          <Typography variant="subtitle1" color="#808080">
            Add data to show chart
          </Typography>
        </Box>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="title" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" stackId="a" fill="#8884d8" />
              <Bar dataKey="incomplete" stackId="a" fill="#82ca9d" />
            </>
          </BarChart>
        </ResponsiveContainer>
      )}
    </>
  );
}
