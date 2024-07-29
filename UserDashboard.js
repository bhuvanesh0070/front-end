import React from 'react';
import { Box, Typography, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';

// Modified Data
const lineChartData = [
  { name: 'Jan', users: 4000, signups: 2400 },
  { name: 'Feb', users: 3000, signups: 2210 },
  { name: 'Mar', users: 2000, signups: 2290 },
  { name: 'Apr', users: 2780, signups: 2000 },
  { name: 'May', users: 1890, signups: 2181 },
  { name: 'Jun', users: 2390, signups: 2500 },
  { name: 'Jul', users: 3490, signups: 2100 },
];

const barChartData = [
  { name: 'Sales', value: 4000 },
  { name: 'Refunds', value: 3000 },
  { name: 'Net Sales', value: 2000 },
];

const pieChartData = [
  { name: 'Completed', value: 400 },
  { name: 'Pending', value: 300 },
  { name: 'Cancelled', value: 200 },
];

const doughnutChartData = [
  { name: 'Marketing', value: 24000 },
  { name: 'Development', value: 14000 },
  { name: 'Customer Support', value: 10000 },
];

const bubbleChartData = [
  { name: 'Feature A', x: 30, y: 40, z: 2000 },
  { name: 'Feature B', x: 50, y: 70, z: 3000 },
  { name: 'Feature C', x: 70, y: 60, z: 1000 },
  { name: 'Feature D', x: 90, y: 90, z: 5000 },
];

const stackedBarData = [
  { name: 'Jan', online: 4000, offline: 2400 },
  { name: 'Feb', online: 3000, offline: 2210 },
  { name: 'Mar', online: 2000, offline: 2290 },
  { name: 'Apr', online: 2780, offline: 2000 },
  { name: 'May', online: 1890, offline: 2181 },
  { name: 'Jun', online: 2390, offline: 2500 },
  { name: 'Jul', online: 3490, offline: 2100 },
];

const recentActivities = [
  { id: 1, date: '2024-07-01', activity: 'User Signup', details: 'John Doe signed up' },
  { id: 2, date: '2024-07-05', activity: 'Purchase', details: 'Jane Smith bought a product' },
  { id: 3, date: '2024-07-12', activity: 'Refund', details: 'Refund issued to John Doe' },
  { id: 4, date: '2024-07-18', activity: 'Product Review', details: 'Jane Smith reviewed a product' },
];

function UserDashboard() {
  return (
    <Container maxWidth="xl" sx={{ padding: 3, backgroundColor: '#f0f0f0' }}>
      <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#333' }}>
          USER DASHBOARD
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Bubble Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Feature Usage
            </Typography>
            <ScatterChart
              width={500}
              height={300}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="X" unit="px" />
              <YAxis type="number" dataKey="y" name="Y" unit="px" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="Features" data={bubbleChartData} fill="#8884d8" />
            </ScatterChart>
          </Paper>
        </Grid>

        {/* Line Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              User and Signup Overview
            </Typography>
            <LineChart
              width={500}
              height={300}
              data={lineChartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#8884d8" />
              <Line type="monotone" dataKey="signups" stroke="#82ca9d" />
            </LineChart>
          </Paper>
        </Grid>

        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Sales Status
            </Typography>
            <BarChart
              width={500}
              height={300}
              data={barChartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </Paper>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Task Distribution
            </Typography>
            <PieChart width={500} height={300}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#8884d8" : "#82ca9d"} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Paper>
        </Grid>

        {/* Doughnut Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Budget Allocation (Doughnut Chart)
            </Typography>
            <PieChart width={500} height={300}>
              <Pie
                data={doughnutChartData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {doughnutChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#8884d8" : "#82ca9d"} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Paper>
        </Grid>

        {/* Stacked Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Monthly Sales Breakdown
            </Typography>
            <BarChart
              width={500}
              height={300}
              data={stackedBarData}
              stackOffset="expand"
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="online" stackId="a" fill="#8884d8" />
              <Bar dataKey="offline" stackId="a" fill="#82ca9d" />
            </BarChart>
          </Paper>
        </Grid>

        {/* Recent Activities Table */}
        <Grid item xs={12}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Recent Activities
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Activity</TableCell>
                    <TableCell>Details</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentActivities.map((activity) => (
                    <TableRow key={activity.id}>
                      <TableCell>{activity.date}</TableCell>
                      <TableCell>{activity.activity}</TableCell>
                      <TableCell>{activity.details}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default UserDashboard;
