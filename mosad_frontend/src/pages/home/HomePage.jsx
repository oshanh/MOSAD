import React from "react";
import Slideshow from '../../component/Slideshow';
import Tile from '../../component/Tile';
import { Box, Stack, Typography, useTheme, Paper, Button, Divider, Grid2 } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import InventoryIcon from '@mui/icons-material/Inventory';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import ReceiptIcon from '@mui/icons-material/Receipt';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AnalyticalCard from "../../component/AnalyticalCard";
import { styled } from "@mui/material/styles";
import Chatbot from '../../component/chatbot';
import { teal, cyan } from '@mui/material/colors';
import Calendar from '../../component/Calendar';
import LineGraph from "../../component/LineGraph";

// Styled Tile Component for a modern look
const ModernTile = styled(Tile)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[2],
  padding: theme.spacing(3),
  textAlign: 'center',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[4],
  },
  '& .MuiSvgIcon-root': {
    fontSize: '3rem',
    marginBottom: theme.spacing(1),
    color: teal[500], // Using teal color
  },
  '& .MuiTypography-h6': {
    fontWeight: 500,
    color: theme.palette.text.primary,
  },
}));

const mockData = {
  dueDates: ['2025.04.01', '2025.03.02'],
};

function HomePage() {
  const { theme } = useTheme();

  const tiles = [
    { title: 'Bill Generate', icon: <DescriptionIcon />, link: '/bills', authorizedRoles: ["OWNER", "ADMIN"] },
    { title: 'Stock', icon: <InventoryIcon />, link: '/stocks/category', authorizedRoles: ["OWNER", "ADMIN", "STOCK_MANAGER"] },
    { title: 'Retail', icon: <StorefrontIcon />, link: '/retails', authorizedRoles: ["OWNER", "ADMIN", "RETAIL_CUSTOMER"] },
    { title: 'Credit', icon: <CreditCardIcon />, link: '/credits', authorizedRoles: ["OWNER", "ADMIN"] },
    { title: 'Branches', icon: <AccountTreeIcon />, link: '/branches', authorizedRoles: ["OWNER", "ADMIN", "BRANCH_MANAGER"] },
    { title: 'Employee', icon: <PeopleIcon />, link: '/employees', authorizedRoles: ["OWNER", "ADMIN", "STOCK_MANAGER", "BRANCH_MANAGER", "MECHANIC"] },
    { title: 'Reports', icon: <AssessmentIcon />, link: "/reports", authorizedRoles: ["OWNER", "ADMIN"] },
    { title: 'Dack Tires', icon: <AssessmentIcon />, link: '/dacks', authorizedRoles: ["OWNER", "ADMIN"] }
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h4" component="h2" mb={3} textAlign="center" color={teal[500]}>
        Admin Dashboard
      </Typography>

      <Grid2 container spacing={3}>
        <Grid2 size={{xs:12}}>
          <Slideshow />
        </Grid2>
        <Grid2 size={{xs:12}}>
          <AnalyticalCard />
        </Grid2>
        <Grid2 size={{xs:12}}>
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
            <Divider
              variant="middle"
              sx={{
                borderBottomWidth: 4,
                borderColor: cyan[400],
                width: '50%',
              }}
            />
          </Box>
        </Grid2>
        <Grid2 container size={{xs:12}} justifyContent={{ md: 'center' }}>
          <Grid2 size={{xs:12,md:4}}>
            <Paper elevation={2} sx={{ 
              p: 3, 
              borderRadius: 2, 
              height: '100%',
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <Typography variant="h6" component="h3" mb={2} textAlign="center" color={teal[500]}>
                Upcoming Due Dates
              </Typography>
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                <Calendar highlightedDates={mockData.dueDates} />
              </Box>
              <Typography variant="body2" color="text.secondary" textAlign="center" mt={2}>
                This calendar displays the due dates for each credit.
                <br />
                Items marked with an <Typography component="span" fontWeight="bold">*</Typography> denote special attention.
              </Typography>
            </Paper>
          </Grid2>

          {/* Vertical Divider - Only shows on medium screens and up */}
          <Grid2 size={{xs:'none',md:'block'}}>
            <Divider orientation="vertical" flexItem sx={{ 
              borderRightWidth: 2, 
              borderColor: cyan[200],
              mx: 'auto',
              height: '100%'
            }} />
          </Grid2>

          {/* Horizontal Divider - Only shows on small screens */}
          <Grid2 size={{xs:'block' ,md:'none'}}>
            <Divider sx={{ 
              borderBottomWidth: 2, 
              borderColor: cyan[200],
              my: 2
            }} />
          </Grid2>

          <Grid2 size={{xs:12,md:4}}>
            <Paper elevation={2} sx={{ 
              p: 3, 
              borderRadius: 2, 
              height: '100%',
              display: 'flex', 
              flexDirection: 'column'
            }}>
              <Typography variant="h6" component="h3" mb={3} textAlign="center" color={teal[500]}>
                Quick Access
              </Typography>
              
              <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<SearchIcon />}
                  fullWidth
                  sx={{ 
                    py: 1.5,
                    borderColor: teal[300],
                    color: teal[700],
                    '&:hover': { 
                      backgroundColor: teal[50],
                      borderColor: teal[500]
                    }
                  }}
                >
                  Product Search
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<ReceiptIcon />}
                  fullWidth
                  sx={{ 
                    py: 1.5,
                    borderColor: teal[300],
                    color: teal[700],
                    '&:hover': { 
                      backgroundColor: teal[50],
                      borderColor: teal[500]
                    }
                  }}
                >
                  View All Bills
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<VisibilityIcon />}
                  fullWidth
                  sx={{ 
                    py: 1.5,
                    borderColor: teal[300],
                    color: teal[700],
                    '&:hover': { 
                      backgroundColor: teal[50],
                      borderColor: teal[500]
                    }
                  }}
                >
                  Item View
                </Button>

                {/* Additional Quick Actions */}
                <Box sx={{ mt: 'auto', pt: 2 }}>
                  <Button
                    variant="contained"
                    size="medium"
                    fullWidth
                    sx={{ 
                      backgroundColor: teal[500],
                      '&:hover': { backgroundColor: teal[700] }
                    }}
                  >
                    Generate Monthly Report
                  </Button>
                </Box>
              </Stack>
            </Paper>
          </Grid2>
            
          <Grid2 size={{xs:10}} >
            <Typography variant="h5" color="text.secondary" textAlign="center" mt={2}>
                    Sales Acros the past 7 days
            </Typography>
            <LineGraph 
            dataSet={[{
              data: [2, 5.5, 2, 8.5, 1.5, 5,23,43,3],
            }]} 
              xaxis={[1, 2, 3, 5, 8, 10,12,14,16]}/>
            
          </Grid2> 
        </Grid2>
        
        <Grid2 size={{xs:12}}>
          <Typography variant="h4" component="h2" gutterBottom textAlign="center" mt={4} color={teal[500]}>
            Choose a section
          </Typography>
          <Stack
            direction="row"
            sx={{
              gap: { xs: '16px', sm: '24px', md: '32px' },
              marginBottom: { xs: 3, sm: 4, md: 5 },
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {tiles.map((tile) => (
              <ModernTile
                key={tile.title}
                allowedRoles={tile.authorizedRoles}
                title={tile.title}
                icon={tile.icon}
                link={tile.link}
              />
            ))}
          </Stack>
        </Grid2>
      </Grid2>

      {/* Floating Chatbot Icon and Window */}
      <Chatbot />
    </Box>
  );
}

export default HomePage;