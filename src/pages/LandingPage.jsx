import { useState } from 'react'
import Envelope from '../components/Envelope.jsx'
import '../styles/pages/landing-page.css'

export default function LandingPage() {
  const [opened, setOpened] = useState(false)

  const handleToggle = (open) => {
    if (open) setOpened(true)
  }

  return (
    <main className={`landing${opened ? ' landing--opened' : ''}`}>
      <p className="landing__intro">introducing</p>

      <h1 className="landing__names">The Clarkes</h1>

      <Envelope
        onToggle={handleToggle}
        monogram={
          <>
            W<span>E</span>
          </>
        }
      />

      <p className="landing__hint">click envelope to open</p>
    </main>
  )
}
