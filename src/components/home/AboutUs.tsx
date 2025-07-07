import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import {
  Groups,
  Verified,
  SupportAgent,
  EmojiEvents,
} from "@mui/icons-material";

const features = [
  {
    icon: <Groups fontSize="large" />,
    title: "Expert Guides",
    description:
      "Our experienced local guides provide authentic insights and ensure your safety throughout your journey.",
  },
  {
    icon: <Verified fontSize="large" />,
    title: "Trusted Service",
    description:
      "With over 10 years of experience, we have helped thousands of travelers create unforgettable memories.",
  },
  {
    icon: <SupportAgent fontSize="large" />,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to assist you before, during, and after your trip.",
  },
  {
    icon: <EmojiEvents fontSize="large" />,
    title: "Award Winning",
    description:
      "Recognized as the leading tour operator with multiple industry awards for excellence in service.",
  },
];

export function AboutUs() {
  return (
    <Box sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" gutterBottom color="primary">
            Why Choose Zaph Tours?
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            We are passionate about creating extraordinary travel experiences
            that connect you with the world's most amazing destinations.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid key={index} size={{xs: 12, sm: 6, md: 3}}>
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                elevation={3}
              >
                <Box sx={{ color: "primary.main", mb: 2 }}>{feature.icon}</Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
