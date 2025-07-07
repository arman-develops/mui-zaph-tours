import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { DestinationCard } from "../components/destinations/DestinationsCard";
import { useState } from "react";
import { destinations } from "../data/destinations";

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDestinations = destinations.filter(
    (destination) =>
      destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" gutterBottom color="primary">
            Our Destinations
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto", mb: 4 }}
          >
            Explore our top destinations across East Africa, each offering
            unique beauty, adventure, and cultural richness.
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
            <Grid key={destination.id} size={{ xs: 12, sm: 6, md: 4 }}>
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
  );
}
