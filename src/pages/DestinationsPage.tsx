import { Box, Container, Typography, Grid, TextField, InputAdornment } from "@mui/material"
import { Search } from "@mui/icons-material"
import { DestinationCard } from "../components/destinations/DestinationsCard"
import { destinations } from "../data/destinations"
import { useState } from "react"

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDestinations = destinations.filter(
    (destination) =>
      destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" gutterBottom color="primary">
            Our Destinations
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
            Explore our carefully curated collection of destinations around the world, each offering unique experiences
            and unforgettable memories.
          </Typography>
          <TextField
            placeholder="Search destinations..."
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ maxWidth: 400, width: "100%" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Grid container spacing={4}>
          {filteredDestinations.map((destination) => (
            <Grid item xs={12} md={6} lg={4} key={destination.id}>
              <DestinationCard destination={destination} />
            </Grid>
          ))}
        </Grid>
        {filteredDestinations.length === 0 && (
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Typography variant="h6" color="text.secondary">
              No destinations found matching your search.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  )
}
