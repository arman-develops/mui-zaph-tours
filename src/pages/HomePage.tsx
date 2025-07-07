import { Hero } from "../components/home/Hero"
import { AboutUs } from "../components/home/AboutUs"
import { FeaturedDestinations } from "../components/home/FeaturedDestinations"
import { Testimonials } from "../components/home/Testimonials"
import { Newsletter } from "../components/home/Newsletter"

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <FeaturedDestinations />
      <Testimonials />
      <Newsletter />
    </>
  )
}
