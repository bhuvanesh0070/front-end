import React from 'react';
import { Box, Typography, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const propertyPerformanceData = [
  { name: 'Q1', occupancy: 75, revenue: 200000 },
  { name: 'Q2', occupancy: 80, revenue: 250000 },
  { name: 'Q3', occupancy: 85, revenue: 300000 },
  { name: 'Q4', occupancy: 90, revenue: 350000 },
];

const topPropertiesData = [
  { id: 1, name: 'Skyline Towers', revenue: 5000000 },
  { id: 2, name: 'Sunset Villas', revenue: 4500000 },
  { id: 3, name: 'Downtown Plaza', revenue: 4000000 },
  { id: 4, name: 'Uptown Lofts', revenue: 3500000 },
];

const recentLeases = [
  { id: 1, date: '2024-07-01', property: 'Skyline Towers', leaseAmount: 150000 },
  { id: 2, date: '2024-07-05', property: 'Sunset Villas', leaseAmount: 120000 },
  { id: 3, date: '2024-07-12', property: 'Downtown Plaza', leaseAmount: 180000 },
  { id: 4, date: '2024-07-18', property: 'Uptown Lofts', leaseAmount: 100000 },
];

const propertyTypesDistribution = [
  { name: 'Residential', value: 500 },
  { name: 'Commercial', value: 400 },
  { name: 'Retail', value: 300 },
  { name: 'Industrial', value: 200 },
];

const PropertyPerformanceChart = ({ data }) => (
  <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
    <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
      Quarterly Property Performance
    </Typography>
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="occupancy" stroke="#8884d8" />
      <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
    </LineChart>
  </Paper>
);

const TopPropertiesChart = ({ data }) => (
  <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
    <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
      Top Properties by Revenue
    </Typography>
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="revenue" fill="#8884d8" />
    </BarChart>
  </Paper>
);

const PropertyTypesDistributionChart = ({ data }) => (
  <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
    <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
      Property Types Distribution
    </Typography>
    <PieChart width={500} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#8884d8" : "#82ca9d"} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </Paper>
);

const LeasesTable = ({ data }) => (
  <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
    <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
      Recent Leases
    </Typography>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Property</TableCell>
            <TableCell>Lease Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((lease) => (
            <TableRow key={lease.id}>
              <TableCell>{lease.id}</TableCell>
              <TableCell>{lease.date}</TableCell>
              <TableCell>{lease.property}</TableCell>
              <TableCell>${lease.leaseAmount.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Paper>
);

const AdminDashboard = () => (
  <Container maxWidth="xl" sx={{ padding: 3 }}>
    <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#333' }}>
        ADMIN DASHBOARD
      </Typography>
    </Box>

    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <PropertyTypesDistributionChart data={propertyTypesDistribution} />
      </Grid>
      <Grid item xs={12} md={6}>
        <PropertyPerformanceChart data={propertyPerformanceData} />
      </Grid>
      <Grid item xs={12}>
        <TopPropertiesChart data={topPropertiesData} />
      </Grid>
      <Grid item xs={12}>
        <LeasesTable data={recentLeases} />
      </Grid>
    </Grid>
  </Container>
);

export default AdminDashboard;
