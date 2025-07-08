import type React from "react"
import { useState } from "react"
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  IconButton,
} from "@mui/material"
import {
  Email,
  Phone,
  LocationOn,
  AccessTime,
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
} from "@mui/icons-material"

const contactInfo = [
  {
    icon: <Email />,
    title: "Email Us",
    details: ["info@zaph.tours", "bookings@zaph.tours"],
  },
  {
    icon: <Phone />,
    title: "Call Us",
    details: ["+254 700 123456", "+254 721 987654"],
  },
  {
    icon: <LocationOn />,
    title: "Visit Us",
    details: ["1st Floor, Zaph Plaza", "Moi Avenue, Nairobi"],
  },
  {
    icon: <AccessTime />,
    title: "Office Hours",
    details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" gutterBottom color="primary">
            Contact Us
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: "auto" }}>
            Ready to start your adventure? Reach out to our team and we'll be happy to help!
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{textAlign: "center"}}>
          <Grid size={{xs: 12, md: 4}}>
            <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
              Get In Touch
            </Typography>
            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid size={{xs: 12}} key={index}>
                  <Card sx={{ height: "100%" }}>
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <Box sx={{ color: "primary.main", mb: 2 }}>{info.icon}</Box>
                      <Typography variant="h6" gutterBottom>
                        {info.title}
                      </Typography>
                      {info.details.map((detail, i) => (
                        <Typography key={i} variant="body2" color="text.secondary">
                          {detail}
                        </Typography>
                      ))}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 4, textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                Connect With Us
              </Typography>
              <Box>
                <IconButton href="https://facebook.com" target="_blank" color="primary">
                  <Facebook />
                </IconButton>
                <IconButton href="https://instagram.com" target="_blank" color="primary">
                  <Instagram />
                </IconButton>
                <IconButton href="https://twitter.com" target="_blank" color="primary">
                  <Twitter />
                </IconButton>
                <IconButton href="https://linkedin.com" target="_blank" color="primary">
                  <LinkedIn />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid size={{xs: 12, md: 8}}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                  Send Us a Message
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField label="Full Name" name="name" fullWidth required value={formData.name} onChange={handleChange} />
                    <TextField label="Email Address" name="email" type="email" fullWidth required value={formData.email} onChange={handleChange} />
                    <TextField label="Phone Number" name="phone" fullWidth value={formData.phone} onChange={handleChange} />
                    <TextField label="Subject" name="subject" fullWidth required value={formData.subject} onChange={handleChange} />
                    <TextField label="Message" name="message" multiline rows={4} fullWidth required value={formData.message} onChange={handleChange} />
                    <Button type="submit" variant="contained" size="large">
                      Send Message
                    </Button>
                  </Stack>
                </Box>
              </CardContent>
            </Card>

            <Box sx={{ mt: 4 }}>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151598.7271284894!2d36.6120004244643!3d-1.3526416746911818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b004fb79b01%3A0x373e7ef6aac693b2!2sNairobi%20National%20Park%20Main%20Gate!5e1!3m2!1sen!2ske!4v1751965257483!5m2!1sen!2ske"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
