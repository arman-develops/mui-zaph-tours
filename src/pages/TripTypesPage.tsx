import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import {
  Hiking,
  DirectionsBoat,
  Groups,
  Favorite,
  CameraAlt,
  Terrain,
} from "@mui/icons-material";

const tripTypes = [
  {
    title: "Adventure Tours",
    description:
      "For thrill-seekers and adrenaline junkies who want to push their limits and experience extreme activities.",
    image: "adventure.jpg",
    icon: <Hiking />,
    features: ["Rock Climbing", "White Water Rafting", "Bungee Jumping", "Zip Lining"],
    duration: "7-14 days",
    difficulty: "High",
    price: "$1,200 – $2,000",
  },
  {
    title: "Cultural Immersion",
    description:
      "Deep dive into local cultures, traditions, and ways of life with authentic experiences and local guides.",
    image: "culture.jpg",
    icon: <Groups />,
    features: ["Local Homestays", "Cooking Classes", "Traditional Crafts", "Cultural Festivals"],
    duration: "5-10 days",
    difficulty: "Low",
    price: "$800 – $1,200",
  },
  {
    title: "Luxury Escapes",
    description:
      "Premium travel experiences with 5-star accommodations, private tours, and exclusive access.",
    image: "luxury.jpg",
    icon: <Favorite />,
    features: ["5-Star Hotels", "Private Guides", "Exclusive Access", "Gourmet Dining"],
    duration: "7-21 days",
    difficulty: "Low",
    price: "$3,000 – $6,000",
  },
  {
    title: "Photography Tours",
    description:
      "Capture stunning landscapes and wildlife with expert photography guides and perfect timing.",
    image: "photography.jpg",
    icon: <CameraAlt />,
    features: ["Golden Hour Shoots", "Wildlife Photography", "Landscape Focus", "Expert Guidance"],
    duration: "5-12 days",
    difficulty: "Medium",
    price: "$1,500 – $2,500",
  },
  {
    title: "Eco Adventures",
    description:
      "Sustainable travel experiences that support conservation efforts and local communities.",
    image: "eco.jpg",
    icon: <Terrain />,
    features: ["Conservation Projects", "Sustainable Lodging", "Wildlife Protection", "Community Support"],
    duration: "7-14 days",
    difficulty: "Medium",
    price: "$900 – $1,800",
  },
  {
    title: "Ocean Expeditions",
    description:
      "Explore marine life and coastal destinations with snorkeling, diving, and boat excursions.",
    image: "ocean.jpg",
    icon: <DirectionsBoat />,
    features: ["Scuba Diving", "Snorkeling", "Marine Wildlife", "Island Hopping"],
    duration: "5-10 days",
    difficulty: "Medium",
    price: "$1,300 – $2,300",
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Low":
      return "success";
    case "Medium":
      return "warning";
    case "High":
      return "error";
    default:
      return "default";
  }
};

export default function TripTypesPage() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" gutterBottom color="primary">
            Trip Types
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            Choose your experience from our wide range of trip types.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {tripTypes.map((trip, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={trip.image}
                  alt={trip.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box sx={{ color: "primary.main", mr: 1 }}>{trip.icon}</Box>
                    <Typography variant="h5">{trip.title}</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {trip.description}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                    <Chip label={trip.duration} size="small" />
                    <Chip
                      label={trip.difficulty}
                      size="small"
                      color={getDifficultyColor(trip.difficulty) as any}
                    />
                  </Stack>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="subtitle2">Includes:</Typography>
                  <Box sx={{ mb: 2 }}>
                    {trip.features.map((feature, i) => (
                      <Typography key={i} variant="body2" color="text.secondary">
                        • {feature}
                      </Typography>
                    ))}
                  </Box>
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    Pricing:
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {trip.price}
                  </Typography>

                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    Gallery:
                  </Typography>

                  <Button variant="contained" fullWidth>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
