import type React from "react"
import { useState } from "react"
import { Box, Container, Typography, TextField, Button, Stack, Paper } from "@mui/material"
import { Email } from "@mui/icons-material"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
    alert("Thank you for subscribing to our newsletter!")
  }

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            p: 6,
            textAlign: "center",
            background: "linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)",
            color: "white",
          }}
        >
          <Email sx={{ fontSize: 48, mb: 2 }} />
          <Typography variant="h3" gutterBottom>
            Stay Updated
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Subscribe to our newsletter and be the first to know about new destinations, special offers, and travel
            tips.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: "auto" }}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                fullWidth
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "white",
                    "& fieldset": {
                      borderColor: "transparent",
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "secondary.main",
                  "&:hover": { bgcolor: "secondary.dark" },
                  minWidth: 120,
                }}
              >
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}
