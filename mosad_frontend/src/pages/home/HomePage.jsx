import React, { useState } from "react";
import Slideshow from '../../component/Slideshow';
import Tile from '../../component/Tile';
import { Box, Stack, Typography, IconButton, Avatar, Paper, TextField, Button, Divider, useTheme } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import InventoryIcon from '@mui/icons-material/Inventory';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';
import useChatbot from "../../hooks/servicesHook/useChatbot";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import AnalyticalCard from "../../component/AnalyticalCard";
import { styled } from "@mui/material/styles";

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
    color: theme.palette.primary.main,
  },
  '& .MuiTypography-h6': {
    fontWeight: 500,
    color: theme.palette.text.primary,
  },
}));

// Styled Chatbot UI
const ChatbotContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: 80,
  right: 20,
  width: 350,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[4],
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  zIndex: 1000,
  display: "flex",
  flexDirection: "column",
  border: `1px solid ${theme.palette.divider}`,
}));

const ChatHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2),
  textAlign: "center",
}));

const ChatMessages = styled(Box)(({ theme }) => ({
  height: 350,
  overflowY: "auto",
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  backgroundColor: theme.palette.background.default,
}));

const UserMessage = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1.5),
  maxWidth: "70%",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: theme.shape.borderRadius,
}));

const BotMessage = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1.5),
  maxWidth: "70%",
  backgroundColor: theme.palette.grey[300],
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
}));

const ChatInput = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

function HomePage() {
  const { response, sendMessage } = useChatbot();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme(); // Access the theme

  const tiles = [
    { title: 'Bill Generate', icon: <DescriptionIcon />, link: '/bills', authorizedRoles:["OWNER","ADMIN"] },
    { title: 'Stock', icon: <InventoryIcon />, link: '/stocks/category', authorizedRoles:["OWNER","ADMIN","STOCK_MANAGER"] },
    { title: 'Retail', icon: <StorefrontIcon />, link: '/retails', authorizedRoles:["OWNER","ADMIN","RETAIL_CUSTOMER"] },
    { title: 'Credit', icon: <CreditCardIcon />, link: '/credits', authorizedRoles:["OWNER","ADMIN"] },
    { title: 'Branches', icon: <AccountTreeIcon />, link: '/branches', authorizedRoles:["OWNER","ADMIN","BRANCH_MANAGER"] },
    { title: 'Employee', icon: <PeopleIcon />, link: '/employees', authorizedRoles:["OWNER","ADMIN","STOCK_MANAGER","BRANCH_MANAGER","MECHANIC"] },
    { title: 'Reports', icon:<AssessmentIcon/>, link:"/reports", authorizedRoles:["OWNER","ADMIN"] },
    { title: 'Dack Tires', icon:<AssessmentIcon/>, link:'/dacks', authorizedRoles:["OWNER","ADMIN"] }
  ];

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    setMessages((prev) => [
      ...prev,
      { text: message, sender: "user", timestamp: new Date().toLocaleTimeString() },
    ]);
    sendMessage(message);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: response, sender: "bot", timestamp: new Date().toLocaleTimeString() },
      ]);
    }, 500);
    setMessage("");
  };

  return (
    <>
     <Typography variant="h4" component="h2" mb={2} textAlign="center" color={theme.palette.primary.main}>
          Admin Dashboard
        </Typography>
     
      <Slideshow />
      <AnalyticalCard/>
      <Box
        sx={{
          marginTop: { xs: 3, sm: 4, md: 5 },
          padding: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom textAlign="center" color={theme.palette.primary.main}>
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

      {/* Floating Chatbot Button */}
      <IconButton
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          "&:hover": { backgroundColor: theme.palette.primary.dark },
          boxShadow: theme.shadows[2],
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <CloseIcon /> : <ChatBubbleOutlineIcon />}
      </IconButton>

      {/* Chatbot UI */}
      {isOpen && (
        <ChatbotContainer>
          {/* Chat Header */}
          <ChatHeader>
            <Typography variant="h6">Chatbot Assistant</Typography>
          </ChatHeader>

          {/* Chat Messages */}
          <ChatMessages>
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                {msg.sender === "bot" && (
                  <Avatar sx={{ bgcolor: theme.palette.primary.main, marginRight: 1 }}>🤖</Avatar>
                )}
                {msg.sender === "user" ? (
                  <UserMessage elevation={2}>
                    <Typography>{msg.text}</Typography>
                    <Typography variant="caption" sx={{ display: "block", textAlign: "right", mt: 0.5 }}>
                      {msg.timestamp}
                    </Typography>
                  </UserMessage>
                ) : (
                  <BotMessage elevation={2}>
                    <Typography>{msg.text}</Typography>
                    <Typography variant="caption" sx={{ display: "block", mt: 0.5 }}>
                      {msg.timestamp}
                    </Typography>
                  </BotMessage>
                )}
              </Box>
            ))}
          </ChatMessages>

          {/* Chat Input */}
          <ChatInput>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{ flexGrow: 1, mr: theme.spacing(1) }}
            />
            <Button variant="contained" color="primary" onClick={handleSendMessage}>
              <SendIcon />
            </Button>
          </ChatInput>
        </ChatbotContainer>
      )}
    </>
  );
}

export default HomePage;