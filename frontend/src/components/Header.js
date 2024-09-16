import React from 'react'
import { Typography, AppBar, Toolbar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
export default function Header() {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/logout')
    };

  return (
    <AppBar position="static">
    <Toolbar>
        {/* Left-align both the title and the "Education" link */}
    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
        <Typography variant="h6" sx={{ mr: 2 }}>
            Voices Unheard
        </Typography>
        <Button color="inherit" component={Link} to="/education">
            Education
        </Button>
    </Box>

    {/* Right-align the "Logout" button */}
    <Button color="inherit" onClick={handleLogout}>
        Logout
    </Button>
    </Toolbar>
</AppBar>
  )
}
