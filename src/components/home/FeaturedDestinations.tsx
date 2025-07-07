import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { DestinationCard } from "../destinations/DestinationsCard";
import { useNavigate } from "react-router-dom";
import {featuredDestinations} from '../../data/featuredDestinations'

export function FeaturedDestinations() {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" gutterBottom color="primary">
            Featured Destinations
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            Discover our most popular destinations that offer incredible experiences and unforgettable memories.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {featuredDestinations.map((destination) => (
            <Grid key={destination.id} size={{xs:12, sm:6, md:4}}>
              <DestinationCard destination={destination} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/destinations")}
          >
            View All Destinations
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
