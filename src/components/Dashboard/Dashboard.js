import React from "react";
import { Grid, Paper } from "@mui/material";
import SmallPieChart from "./PieChart";
import StackedChart from "./StackedChart";

const Dashboard = () => {
  return (
    <>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 300,
            }}
          >
            <StackedChart />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 300,
            }}
          >
            <SmallPieChart />
          </Paper>
        </Grid>
        {/* Recent Orders */}
      </Grid>
    </>
  );
};

export default Dashboard;
