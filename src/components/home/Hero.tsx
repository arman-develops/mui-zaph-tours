import { Box, Container, Typography, Button, Stack } from "@mui/material"
import { Explore, FlightTakeoff } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"

export function Hero() {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/placeholder.svg?height=800&width=1200)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 600 }}>
          <Typography variant="h1" gutterBottom>
            Discover Your Next Adventure
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            Explore breathtaking destinations around the world with our expertly guided tours and unforgettable
            experiences.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant="contained"
              size="large"
              startIcon={<Explore />}
              onClick={() => navigate("/destinations")}
              sx={{ bgcolor: "secondary.main", "&:hover": { bgcolor: "secondary.dark" } }}
            >
              Explore Destinations
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<FlightTakeoff />}
              onClick={() => navigate("/contact")}
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.1)" },
              }}
            >
              Plan Your Trip
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
