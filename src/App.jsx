import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import InstructionsPage from './pages/InstructionsPage.jsx'
import CollagePage from './pages/CollagePage.jsx'
import RsvpPage from './pages/RsvpPage.jsx'
import OurStoryPage from './pages/OurStoryPage.jsx'
import './styles/app.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function HomeScroll({ opened, onOpen }) {
  return (
    <div className={opened ? 'app' : 'app app--locked'}>
      <LandingPage opened={opened} onOpen={onOpen} />
      <InstructionsPage />
      <CollagePage />
      <RsvpPage />
    </div>
  )
}

export default function App() {
  // lives here so it survives navigating to /our-story and back — the page
  // stays open and scrollable instead of resetting to the sealed envelope
  const [opened, setOpened] = useState(false)

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<HomeScroll opened={opened} onOpen={() => setOpened(true)} />}
        />
        <Route path="/our-story" element={<OurStoryPage />} />
      </Routes>
    </>
  )
}
