import React from 'react'
import { Container, Stack } from '@mui/system'
import { Grid2, Paper, Typography } from '@mui/material'
import SalesGraph from '../../component/GraphComponent'

const StockReport = () => {
  return (
     <Container disableGutters>
      <Paper elevation={3}>
        <Stack>
          <Paper elevation={3}>
            <SalesGraph dataSet={[
              { data: [35, 44, 24, 34] },
              { data: [51, 6, 49, 30] },
              { data: [15, 25, 30, 50] },
              { data: [60, 50, 15, 25] },
            ]}
              xaxis={['Q1', 'Q2', 'Q3', 'Q4']}
            >

            </SalesGraph>
          </Paper>
          
          <Grid2 container>
            <Grid2 size={{xs:12,md:8}}>
            <Typography>
              Table of all products
            </Typography>
            </Grid2>
            <Grid2 size={{xs:12,md:4}}>
            <Typography>
              Calenderar with due dates
            </Typography>
            </Grid2>
          </Grid2>

          <Paper elevation={3}>
            <Typography>
              Report Genration
            </Typography>
          </Paper>
        </Stack>
      </Paper>
     </Container>  
  )
}

export default StockReport