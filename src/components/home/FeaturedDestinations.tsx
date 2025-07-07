import { Box, Container, Typography, Grid, Button } from "@mui/material"
import { DestinationCard } from "../destinations/DestinationsCard"
import { useNavigate } from "react-router-dom"

const featuredDestinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    description: "Experience the stunning sunsets and white-washed buildings of this iconic Greek island.",
    image: "/placeholder.svg?height=300&width=400",
    groupPrice: 1299,
    individualPrice: 1599,
    link: "/destinations/santorini",
  },
  {
    id: 2,
    name: "Machu Picchu, Peru",
    description: "Discover the ancient Incan citadel high in the Andes Mountains.",
    image: "/placeholder.svg?height=300&width=400",
    groupPrice: 1899,
    individualPrice: 2299,
    link: "/destinations/machu-picchu",
  },
  {
    id: 3,
    name: "Safari in Kenya",
    description: "Witness the incredible wildlife of the African savanna on an unforgettable safari adventure.",
    image: "/placeholder.svg?height=300&width=400",
    groupPrice: 2499,
    individualPrice: 2999,
    link: "/destinations/kenya-safari",
  },
]

export function FeaturedDestinations() {
  const navigate = useNavigate()

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" gutterBottom color="primary">
            Featured Destinations
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: "auto" }}>
            Discover our most popular destinations that offer incredible experiences and unforgettable memories.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {featuredDestinations.map((destination) => (
            <Grid item xs={12} md={4} key={destination.id}>
              <DestinationCard destination={destination} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button variant="contained" size="large" onClick={() => navigate("/destinations")}>
            View All Destinations
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
