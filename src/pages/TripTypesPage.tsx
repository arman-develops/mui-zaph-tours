import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, Stack } from "@mui/material"
import { Hiking, DirectionsBoat, Groups, Favorite, CameraAlt, Terrain } from "@mui/icons-material"

const tripTypes = [
  {
    title: "Adventure Tours",
    description:
      "For thrill-seekers and adrenaline junkies who want to push their limits and experience extreme activities.",
    image: "/placeholder.svg?height=300&width=400",
    icon: <Hiking />,
    features: ["Rock Climbing", "White Water Rafting", "Bungee Jumping", "Zip Lining"],
    duration: "7-14 days",
    difficulty: "High",
  },
  {
    title: "Cultural Immersion",
    description:
      "Deep dive into local cultures, traditions, and ways of life with authentic experiences and local guides.",
    image: "/placeholder.svg?height=300&width=400",
    icon: <Groups />,
    features: ["Local Homestays", "Cooking Classes", "Traditional Crafts", "Cultural Festivals"],
    duration: "5-10 days",
    difficulty: "Low",
  },
  {
    title: "Luxury Escapes",
    description: "Premium travel experiences with 5-star accommodations, private tours, and exclusive access.",
    image: "/placeholder.svg?height=300&width=400",
    icon: <Favorite />,
    features: ["5-Star Hotels", "Private Guides", "Exclusive Access", "Gourmet Dining"],
    duration: "7-21 days",
    difficulty: "Low",
  },
  {
    title: "Photography Tours",
    description: "Capture stunning landscapes and wildlife with expert photography guides and perfect timing.",
    image: "/placeholder.svg?height=300&width=400",
    icon: <CameraAlt />,
    features: ["Golden Hour Shoots", "Wildlife Photography", "Landscape Focus", "Expert Guidance"],
    duration: "5-12 days",
    difficulty: "Medium",
  },
  {
    title: "Eco Adventures",
    description: "Sustainable travel experiences that support conservation efforts and local communities.",
    image: "/placeholder.svg?height=300&width=400",
    icon: <Terrain />,
    features: ["Conservation Projects", "Sustainable Lodging", "Wildlife Protection", "Community Support"],
    duration: "7-14 days",
    difficulty: "Medium",
  },
  {
    title: "Ocean Expeditions",
    description: "Explore marine life and coastal destinations with snorkeling, diving, and boat excursions.",
    image: "/placeholder.svg?height=300&width=400",
    icon: <DirectionsBoat />,
    features: ["Scuba Diving", "Snorkeling", "Marine Wildlife", "Island Hopping"],
    duration: "5-10 days",
    difficulty: "Medium",
  },
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Low":
      return "success"
    case "Medium":
      return "warning"
    case "High":
      return "error"
    default:
      return "default"
  }
}

export default function TripTypesPage() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" gutterBottom color="primary">
            Trip Types
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: "auto" }}>
            Choose from our diverse range of travel experiences, each designed to cater to different interests and
            adventure levels.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {tripTypes.map((tripType, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia component="img" height="200" image={tripType.image} alt={tripType.title} />
                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box sx={{ color: "primary.main", mr: 1 }}>{tripType.icon}</Box>
                    <Typography variant="h5">{tripType.title}</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
                    {tripType.description}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    <Chip label={tripType.duration} size="small" />
                    <Chip
                      label={tripType.difficulty}
                      size="small"
                      color={getDifficultyColor(tripType.difficulty) as any}
                    />
                  </Stack>
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    Includes:
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    {tripType.features.map((feature, featureIndex) => (
                      <Typography key={featureIndex} variant="body2" color="text.secondary">
                        • {feature}
                      </Typography>
                    ))}
                  </Box>
                  <Button variant="contained" fullWidth sx={{ mt: "auto" }}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
