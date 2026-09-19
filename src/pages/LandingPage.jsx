import Envelope from '../components/Envelope.jsx'
import '../styles/pages/landing-page.css'

export default function LandingPage({ opened = false, onOpen }) {
  const handleToggle = (open) => {
    if (open) onOpen?.()
  }

  return (
    <main className={`landing${opened ? ' landing--opened' : ''}`}>
      <p className="landing__intro">introducing</p>

      <h1 className="landing__names">The Clarkes</h1>

      <Envelope
        defaultOpen={opened}
        onToggle={handleToggle}
        monogram={<img src="/images/WE_green.png" alt="" />}
      />

      <p className="landing__hint">click envelope to open</p>

      {/* revealed once the envelope has opened and faded away */}
      <img
        className="landing__invite"
        src="/images/lace_invite.png"
        alt="The Clarkes invitation"
      />
    </main>
  )
}
