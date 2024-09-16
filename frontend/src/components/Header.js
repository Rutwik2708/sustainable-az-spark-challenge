import React from 'react'
import { Typography, AppBar, Toolbar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/logout')
    };

  return (
    <AppBar position="static">
    <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Mine Watch
        </Typography>
        <Button color="inherit" onClick={handleLogout}>
            Logout
        </Button>
    </Toolbar>
</AppBar>
  )
}
