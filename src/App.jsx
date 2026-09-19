import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import InstructionsPage from './pages/InstructionsPage.jsx'
import CollagePage from './pages/CollagePage.jsx'
import RsvpPage from './pages/RsvpPage.jsx'
import ContactComponent from './components/ContactComponent.jsx'
import OurStoryPage from './pages/OurStoryPage.jsx'
import DetailsPage from './pages/DetailsPage.jsx'
import './styles/app.css'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    // "/#rsvp" etc. jump to that section; anything else starts at the top
    const target = hash ? document.getElementById(hash.slice(1)) : null
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function HomeScroll({ opened, onOpen }) {
  return (
    <div className={opened ? 'app' : 'app app--locked'}>
      <LandingPage opened={opened} onOpen={onOpen} />
      <InstructionsPage />
      <CollagePage />
      <RsvpPage />
      <ContactComponent />
    </div>
  )
}

export default function App() {
  // lives here so it survives navigating to /our-story and back — the page
  // stays open and scrollable instead of resetting to the sealed envelope
  const [opened, setOpened] = useState(false)

  // a link straight to a section ("/#collage", "/#rsvp") means the visitor is
  // past the envelope — open the page so that section is reachable, even after
  // a refresh or a direct visit to /details
  const { hash } = useLocation()
  const jumping = hash !== ''
  useEffect(() => {
    if (jumping) setOpened(true)
  }, [jumping])

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<HomeScroll opened={opened || jumping} onOpen={() => setOpened(true)} />}
        />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </>
  )
}
