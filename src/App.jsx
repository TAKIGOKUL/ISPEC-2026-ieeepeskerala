import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Highlights from './components/Highlights'
import ImportantDates from './components/ImportantDates'
import Speakers from './components/Speakers'
import Footer from './components/Footer'
import AnnouncementBar from './components/AnnouncementBar'
import Sponsors from './components/Sponsors'
import AboutPage from './pages/AboutPage'
import CommitteePage from './pages/CommitteePage'
import CallForPapersPage from './pages/CallForPapersPage'
import RegistrationPage from './pages/RegistrationPage'
import ContactPage from './pages/ContactPage'
import PresentationGuidelinePage from './pages/PresentationGuidelinePage'
import SponsorshipPage from './pages/SponsorshipPage'
import StudentSupportPage from './pages/StudentSupportPage'
import TravelPage from './pages/TravelPage'
import VenuePage from './pages/VenuePage'
import './index.css'

const Home = () => (
  <>
    <Hero />
    <AnnouncementBar />
    <About />
    <ImportantDates />
    <Speakers />
    <Sponsors />
  </>
)

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <main><Home /></main>
              <Footer />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/committee" element={<CommitteePage />} />
          <Route path="/call-for-papers" element={<CallForPapersPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/presentation-guideline" element={<PresentationGuidelinePage />} />
          <Route path="/sponsorship" element={<SponsorshipPage />} />
          <Route path="/student-support" element={<StudentSupportPage />} />
          <Route path="/travel" element={<TravelPage />} />
          <Route path="/venue" element={<VenuePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App