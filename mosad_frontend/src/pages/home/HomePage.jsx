import React from "react";
import Slideshow from '../../component/Slideshow';
import Tile from '../../component/Tile';
import { Box, Stack, Typography, useTheme } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import InventoryIcon from '@mui/icons-material/Inventory';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AnalyticalCard from "../../component/AnalyticalCard";
import { styled } from "@mui/material/styles";
import Chatbot from '../../component/chatbot';
import { teal } from '@mui/material/colors';


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
    <>
      <Typography variant="h4" component="h2" mb={2} textAlign="center" color={teal[500]}>
        Admin Dashboard
      </Typography>

      <Slideshow />
      <AnalyticalCard />

      <Box
        sx={{
          marginTop: { xs: 3, sm: 4, md: 5 },
          padding: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom textAlign="center" color={teal[500]}>
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
      </Box>

      {/* Floating Chatbot Icon and Window */}
      <Chatbot />
    </>
  );
}

export default HomePage;