import { 
    Box, Typography, useMediaQuery, useTheme,
    List, ListItem, ListItemText 
} from "@mui/material";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { navItems } from "../data/navBarItems";

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
}