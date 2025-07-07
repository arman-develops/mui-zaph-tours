import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material"
import { Facebook, Twitter, Instagram, Email, Phone, LocationOn } from "@mui/icons-material"
import { Link as RouterLink } from "react-router-dom"

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.dark",
        color: "white",
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Adventure Tours
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Discover the world with our expertly crafted tours and unforgettable experiences.
            </Typography>
            <Box>
              <IconButton color="inherit" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link component={RouterLink} to="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link component={RouterLink} to="/destinations" color="inherit" underline="hover">
                Destinations
              </Link>
              <Link component={RouterLink} to="/trip-types" color="inherit" underline="hover">
                Trip Types
              </Link>
              <Link component={RouterLink} to="/contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Email sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">info@adventuretours.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Phone sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">+1 (555) 123-4567</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocationOn sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">123 Adventure St, Travel City</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: 1, borderColor: "primary.light", mt: 4, pt: 2 }}>
          <Typography variant="body2" align="center">
            © 2025 Zaph Tours. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
