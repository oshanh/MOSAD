import React, { useState } from 'react';
import { Divider, Stack, Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { Paper, Typography, Grid2 } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import SalesGraph from '../../component/GraphComponent'; // Assuming this path is correct
import { cyan } from '@mui/material/colors';

const StockReport = () => {
  const [reportName, setReportName] = useState('');

  const handleReportNameChange = (event) => {
    setReportName(event.target.value);
  };

  const handleGenerateReport = () => {
    // Implement your report generation logic here
    console.log(`Generating report with name: ${reportName}`);
    // You might trigger a download or API call here
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'totalBrands', headerName: 'Total Brands', width: 130 },
    { field: 'totalItems', headerName: 'Total Items', width: 130 },
  ];

  const rows = [
    { id: 1, category: 'Electronics', totalBrands: 5, totalItems: 25 },
    { id: 2, category: 'Clothing', totalBrands: 10, totalItems: 150 },
    { id: 3, category: 'Books', totalBrands: 20, totalItems: 500 },
    { id: 4, category: 'Home Goods', totalBrands: 8, totalItems: 80 },
    { id: 5, category: 'Food', totalBrands: 15, totalItems: 200 },
  ];

  return (
    <Box sx={{mx:5}}>
      <Paper elevation={3} sx={{px:5,py:3,width:'100%'}}>
        <Stack spacing={2}>
            <Typography variant="h6" gutterBottom>
                  Sales graph acros past 7 days
            </Typography>
          <Paper elevation={3}>  
            <SalesGraph
              dataSet={[
                { data: [35, 44, 24, 34] },
                { data: [51, 6, 49, 30] },
                { data: [15, 25, 30, 50] },
                { data: [60, 50, 15, 25] },
              ]}
              xaxis={['Q1', 'Q2', 'Q3', 'Q4']}
            />
          </Paper>
          <Grid2 size={{xs:12}}>
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
            <Divider
              variant="middle"
              sx={{
                borderBottomWidth: 4,
                borderColor: cyan[400],
                width: '80%',
              }}
            />
          </Box>
        </Grid2>
          <Grid2 container spacing={2}>
            <Grid2  size={{xs:12,md:6}}>
              <Typography variant="h6" gutterBottom>
                Table of all products
              </Typography>
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSizeOptions={[5, 10, 25]}
                  checkboxSelection
                />
              </div>
            </Grid2>
            <Grid2  size={{xs:12,md:6}}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Calendar with Due Dates
                </Typography>
                {/* You can integrate a calendar component here */}
                <Typography variant="body2">
                  (Calendar component will be implemented here)
                </Typography>
              </Paper>
            </Grid2>
          </Grid2>

          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Report Generation
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <FormControl fullWidth>
                <InputLabel id="report-name-label">Select Report Name</InputLabel>
                <Select
                  labelId="report-name-label"
                  id="report-name"
                  value={reportName}
                  label="Select Report Name"
                  onChange={handleReportNameChange}
                >
                  <MenuItem value="stock_summary">Stock Summary</MenuItem>
                  <MenuItem value="sales_overview">Sales Overview</MenuItem>
                  {/* Add more report name options as needed */}
                </Select>
              </FormControl>
              <Button variant="contained" color="primary" onClick={handleGenerateReport} disabled={!reportName}>
                Generate Report
              </Button>
            </Box>
          </Paper>
        </Stack>
      </Paper>
    </Box>
  );
};

export default StockReport;