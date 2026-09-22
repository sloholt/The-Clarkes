import { useState } from 'react'
import '../styles/pages/rsvp-page.css'

// Paste the Web App URL your guest sends you (ends in /exec)
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxLyrYYTPqkQI18KJr8xh5cvYVYNe4gO5SteRqicXk2mLHKigltfbrtbYHBT1wc1a0cwA/exec'

export default function RsvpPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    const formData = new FormData(e.target)

    const data = {
      name: formData.get('name'),
      attendance: formData.get('attendance'),
      email: formData.get('email'),
      address: formData.get('address'),
      dietary: formData.get('dietary'),
      questions: formData.get('questions'),
    }

    try {
      // mode: "no-cors" is required for Apps Script web apps — the response
      // itself can't be read, so we just assume success if fetch doesn't throw.
      await fetch(WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="rsvp" id="rsvp">
      <div className="page">
        <header>
          <h1>RSVP</h1>
          <hr className="divider" />
          <p className="subtitle">Kindly respond by March 6th, 2027</p>
        </header>

        <div className={submitted ? 'lace-frame lace-frame--submitted' : 'lace-frame'}>
          <form
            id="rsvpForm"
            className={submitted ? 'hidden' : undefined}
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label htmlFor="name">Your full name(s)</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full name"
                required
              />
            </div>

            <div className="field">
              <span className="group-label">Will you be joining us</span>

              <div className="attend-options">
                <label className="attend-option">
                  <input type="radio" name="attendance" value="accept" required />
                  Joyfully accept
                </label>

                <label className="attend-option">
                  <input type="radio" name="attendance" value="decline" />
                  Regretfully cannot make it
                </label>
              </div>

              <p className="helper">
                We are only able to accommodate those listed on the invitation, no
                plus ones.
              </p>
            </div>

            <div className="field">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="field address-box">
              <label htmlFor="address">Mailing address</label>
              <textarea
                id="address"
                name="address"
                placeholder="Street, city, province, postal code"
              />
            </div>

            <div className="field dietary-box">
              <label htmlFor="dietary"> Dietary restrictions &amp; allergies </label>

              <textarea
                id="dietary"
                name="dietary"
                placeholder="Guest name &amp; requirement"
              />

              <p className="helper">
                Please list any dietary requirements or allergies, and the name of
                the guest they apply to.
              </p>
            </div>

            <div className="field question-box">
              <label htmlFor="questions">
                Please feel free to ask us any questions below
              </label>

              <textarea
                id="questions"
                name="questions"
                placeholder="Your question"
              />
              <p className="helper">
                Or check out our FAQ page for more info
                
              </p>
            </div>
            

            {error && <p className="helper" style={{ color: '#c0392b' }}>{error}</p>}

            <div className="submit-row">
              <button type="submit" className="submit" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send RSVP'}
              </button>
            </div>
          </form>

          <div
            className="thanks"
            id="thanksMessage"
            style={submitted ? { display: 'block' } : undefined}
          >
            <h2>Thank You</h2>
            <p>Your response has been received</p>
          </div>
        </div>
      </div>
    </div>
  )
}