import React, { useState } from "react";
import Slideshow from '../../component/Slideshow';
import Tile from '../../component/Tile';
import { Box, Stack, Typography, IconButton, Avatar, Paper, TextField, Button, Divider } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import InventoryIcon from '@mui/icons-material/Inventory';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';
import useAuth from '../../hooks/useAuth';
import useChatbot from "../../hooks/servicesHook/useChatbot";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import AnalyticalCard from "../../component/AnalyticalCard";

function HomePage() {
  const { auth } = useAuth();
  const { response, sendMessage } = useChatbot();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // Stores chat history
  const [isOpen, setIsOpen] = useState(false); // Toggle chat window

  const tiles = [
    { title: 'Bill Generate', icon: <DescriptionIcon fontSize="large" />, link: '/bills', authorizedRoles:["OWNER","ADMIN"] },
    { title: 'Stock', icon: <InventoryIcon fontSize="large" />, link: '/stocks', authorizedRoles:["OWNER","ADMIN","STOCK_MANAGER"] },
    { title: 'Retail', icon: <StorefrontIcon fontSize="large" />, link: '/retails', authorizedRoles:["OWNER","ADMIN","RETAIL_CUSTOMER"] },
    { title: 'Credit', icon: <CreditCardIcon fontSize="large" />, link: '/credits', authorizedRoles:["OWNER","ADMIN"] },
    { title: 'Branches', icon: <AccountTreeIcon fontSize="large" />, link: '/branches', authorizedRoles:["OWNER","ADMIN","BRANCH_MANAGER"] },
    { title: 'Employee', icon: <PeopleIcon fontSize="large" />, link: '/employees', authorizedRoles:["OWNER","ADMIN","STOCK_MANAGER","BRANCH_MANAGER","MECHANIC"] },
    { title: 'Reports', icon:<AssessmentIcon fontSize="large"/>, link:"/reports", authorizedRoles:["OWNER","ADMIN"] },
    { title: 'Dack Tires', icon:<AssessmentIcon fontSize='large'/>, link:'/dacks', authorizedRoles:["OWNER","ADMIN"] }
  ];

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    // Add user message to chat history
    setMessages((prev) => [
      ...prev,
      { text: message, sender: "user", timestamp: new Date().toLocaleTimeString() },
    ]);

    sendMessage(message);

    // Add chatbot response to chat history
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: response, sender: "bot", timestamp: new Date().toLocaleTimeString() },
      ]);
    }, 500);

    setMessage(""); // Clear input field
  };

  return (
    <>
    <Typography sx={{
      fontSize: '1.1rem',
      fontWeight: 600,
      marginBottom: 1,
      textShadow: `1px 1px 2px rgba(0, 0, 0, 0.2)`,
    }}>
      Basic Summary
    </Typography>
      <AnalyticalCard/>
      <Slideshow />
      <Box
        sx={{
          marginTop: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
        }}
      >
        <Stack
          direction="row"
          sx={{
            gap: { xs: '8px', sm: '20px', md: '50px', lg: '100px', xl: '120px' },
            marginBottom: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {tiles.map((tile) => (
            <Tile key={tile.title}
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
          bottom: 20,
          right: 20,
          backgroundColor: "#0078ff",
          color: "white",
          "&:hover": { backgroundColor: "#005bb5" },
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <CloseIcon /> : <ChatBubbleOutlineIcon />}
      </IconButton>

      {/* Chatbot UI */}
      {isOpen && (
        <Box
          sx={{
            position: "fixed",
            bottom: 80,
            right: 20,
            width: 350,
            backgroundColor: "#fff",
            boxShadow: 3,
            borderRadius: 2,
            overflow: "hidden",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            border: "1px solid #ccc",
          }}
        >
          {/* Chat Header */}
          <Box
            sx={{
              backgroundColor: "#0078ff",
              color: "#fff",
              padding: "12px",
              textAlign: "center",
            }}
          >
            <Typography variant="h6">Chatbot Assistant</Typography>
          </Box>

          {/* Chat Messages */}
          <Box
            sx={{
              height: 350,
              overflowY: "auto",
              padding: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              backgroundColor: "#f9f9f9",
            }}
          >
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                {msg.sender === "bot" && (
                  <Avatar sx={{ bgcolor: "#0078ff", marginRight: 1 }}>🤖</Avatar>
                )}
                <Paper
                  sx={{
                    padding: "10px",
                    maxWidth: "70%",
                    backgroundColor: msg.sender === "user" ? "#0078ff" : "#e0e0e0",
                    color: msg.sender === "user" ? "#fff" : "#000",
                    borderRadius: "15px",
                  }}
                >
                  {msg.text}
                  <Typography variant="caption" sx={{ display: "block", textAlign: "right", mt: 0.5 }}>
                    {msg.timestamp}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Box>

          {/* Chat Input */}
          <Box sx={{ display: "flex", alignItems: "center", padding: 1, borderTop: "1px solid #ccc" }}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{ flexGrow: 1, mr: 1 }}
            />
            <Button variant="contained" color="primary" onClick={handleSendMessage}>
              <SendIcon />
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
}

export default HomePage;
