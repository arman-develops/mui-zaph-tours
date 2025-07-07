import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Rating } from "@mui/material"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    comment:
      "The trip to Santorini was absolutely magical! The guides were knowledgeable and the accommodations were perfect.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Chen",
    location: "Toronto, Canada",
    rating: 5,
    comment:
      "Machu Picchu exceeded all my expectations. The organization was flawless and the experience was life-changing.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Emma Wilson",
    location: "London, UK",
    rating: 5,
    comment:
      "The Kenya safari was the adventure of a lifetime. Seeing the Big Five in their natural habitat was incredible!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function Testimonials() {
  return (
    <Box sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" gutterBottom color="primary">
            What Our Travelers Say
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: "auto" }}>
            Read testimonials from our satisfied customers who have experienced the adventure of a lifetime.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar src={testimonial.avatar} sx={{ mr: 2 }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.location}
                      </Typography>
                    </Box>
                  </Box>
                  <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                  <Typography variant="body2" color="text.secondary">
                    "{testimonial.comment}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
