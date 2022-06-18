import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

const COLORS = [
  { color: "#0088FE", label: "Completed" },
  { color: "#00C49F", label: "Incomplete Tasks" },
];

export default function SmallPieChart() {
  const boards = useSelector((state) => state.taskManager.boards);

  const totalCompletedCards = boards
    .map((board) => {
      return board.cards.filter((card) => card.completed === true).length;
    })
    .reduce((a, b) => a + b, 0);

  const totalCards = boards
    .map((board) => {
      return board.cards.length;
    })
    .reduce((a, b) => a + b, 0);

  const totalIncompleteCards = totalCards - totalCompletedCards;

  const data = [
    { name: "Completed", value: totalCompletedCards },
    { name: "Uncompleted", value: totalIncompleteCards },
  ];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
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
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      {COLORS.map((c, index) => (
        <Box display="flex" alignItems="center" key={index}>
          <Box
            sx={{
              width: "35px",
              height: "15px",
              backgroundColor: `${c.color}`,
              marginRight: "15px",
            }}
          >
            .
          </Box>
          <Typography>{c.label}</Typography>
        </Box>
      ))}

      {totalCards > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    COLORS.map((color, id) => color.color)[
                      index % COLORS.length
                    ]
                  }
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <Box display="flex" justifyContent="center" sx={{ mt: 10 }}>
          <Typography variant="subtitle1" color="#808080">
            Add data to show chart
          </Typography>
        </Box>
      )}
    </>
  );
}
