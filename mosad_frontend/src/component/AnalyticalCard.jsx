import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import LinearProgress from '@mui/material/LinearProgress';

const analyticalData = [
  {
    id: 1,
    title: 'Total Item Types',
    value: 50,
    progress: 75, // Example progress value (0-100)
  },
  {
    id: 2,
    title: 'Total Brands We Have',
    value: 25,
    progress: 40,
  },
  {
    id: 3,
    title: 'Total Items in Stock',
    value: 342,
    progress: 90,
  },
];

const FuturisticCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(135deg, ${green[700]} 0%, ${green[900]} 100%)`,
  color: theme.palette.common.white,
  borderRadius: theme.spacing(1),
  boxShadow: `0 4px 8px rgba(0, 0, 0, 0.2)`,
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0 8px 16px rgba(0, 0, 0, 0.3)`,
  },
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  textShadow: `1px 1px 2px rgba(0, 0, 0, 0.3)`,
}));

const ValueTypography = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  textShadow: `1px 1px 3px rgba(0, 0, 0, 0.4)`,
}));

const ProgressContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  borderRadius: theme.spacing(0.5),
  overflow: 'hidden',
}));

const FuturisticLinearProgress = styled(LinearProgress)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  '& .MuiLinearProgress-bar': {
    backgroundColor: theme.palette.success.light, // A lighter shade of green
  },
}));

function AnalyticalCard() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(17%, 100%), 1fr))', // Slightly wider minWidth
        gap: 3, 
        mb: 5,
        mx:2 
      }}
    >
      {analyticalData.map((data) => (
        <FuturisticCard key={data.id}>
          <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: 1 }}>
            <TitleTypography variant="h6" component="div">
              {data.title}
            </TitleTypography>
            <ValueTypography variant="h4" color="inherit">
              {data.value}
            </ValueTypography>
            {data.progress !== undefined && (
              <ProgressContainer>
                <FuturisticLinearProgress variant="determinate" value={data.progress} />
              </ProgressContainer>
            )}
          </CardContent>
        </FuturisticCard>
      ))}
    </Box>
  );
}

export default AnalyticalCard;