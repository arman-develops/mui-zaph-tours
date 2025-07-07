import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Rating } from "@mui/material"
import { testimonials } from "../../data/testimonials"

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
