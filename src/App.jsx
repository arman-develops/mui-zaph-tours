import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/theme/ThemeProvider"
import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import HomePage from "./pages/HomePage"
import DestinationsPage from "./pages/DestinationsPage"
import TripTypesPage from "./pages/TripTypesPage"
import ContactPage from "./pages/ContactPage"

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/trip-types" element={<TripTypesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App