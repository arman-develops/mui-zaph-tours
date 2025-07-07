import { 
    Box, Typography, useMediaQuery, useTheme,
    List, ListItem, ListItemText,
    AppBar, Toolbar, IconButton,
    Button,
    Drawer
} from "@mui/material";
import {Menu as MenuIcon, Explore} from '@mui/icons-material'
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { navItems } from "../data/navbarItems";
export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const location = useLocation()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: "center"}} >
            <Typography variant="h6" sx={{my:2}}>
                Zaph Tours
            </Typography>
            <List>
                {navItems.map((item) => (
                <ListItem key={item.label} disablePadding>
                    <Link to={item.href} style={{ width: "100%", textDecoration: "none", color: "inherit" }}>
                    <ListItemText primary={item.label} sx={{ textAlign: "center", py: 1 }} />
                    </Link>
                </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
    <>
      <AppBar position="sticky" elevation={1}>
        <Toolbar>
          <Explore sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Zaph Tours
            </Link>
          </Typography>
          {isMobile ? (
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navItems.map((item) => (
                <Link key={item.label} to={item.href} style={{ textDecoration: "none" }}>
                  <Button
                    
                    sx={{
                      color: "background.default",
                      backgroundColor: location.pathname === item.href ? "rgba(255,255,255,0.1)" : "transparent",
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}