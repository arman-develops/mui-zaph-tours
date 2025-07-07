"use client"

import { Card, CardMedia, CardContent, Typography, Button, Chip, Stack } from "@mui/material"
import { Group, Person, ArrowForward } from "@mui/icons-material"

interface Destination {
  id: number
  name: string
  description: string
  image: string
  groupPrice: number
  individualPrice: number
  link: string
}

interface DestinationCardProps {
  destination: Destination
}

export function DestinationCard({ destination }: DestinationCardProps) {
  const handleLearnMore = () => {
    // In a real app, this would navigate to the destination detail page
    alert(`Learn more about ${destination.name} - Coming soon!`)
  }

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia component="img" height="240" image={destination.image} alt={destination.name} />
      <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" gutterBottom>
          {destination.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
          {destination.description}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
          <Chip icon={<Group />} label={`Group: $${destination.groupPrice}`} color="primary" variant="outlined" />
          <Chip
            icon={<Person />}
            label={`Individual: $${destination.individualPrice}`}
            color="secondary"
            variant="outlined"
          />
        </Stack>
        <Button variant="contained" fullWidth endIcon={<ArrowForward />} onClick={handleLearnMore} sx={{ mt: "auto" }}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  )
}
