import { useState } from 'react'
import '../styles/pages/rsvp-page.css'

export default function RsvpPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="rsvp">
      <div className="page">
        <header>
          <h1>RSVP</h1>
          <hr className="divider" />
          <p className="subtitle">Kindly respond by October 30th</p>
        </header>

        <div className="lace-frame">
          <form
            id="rsvpForm"
            className={submitted ? 'hidden' : undefined}
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label htmlFor="name">Your full name</label>
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
                placeholder="Street, city, state, zip"
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
            </div>

            <div className="submit-row">
              <button type="submit" className="submit">
                Send RSVP
              </button>
            </div>
          </form>

          <div
            className="thanks"
            id="thanksMessage"
            style={submitted ? { display: 'block' } : undefined}
          >
            <h2>Thank You</h2>
            <p>Your response has been received.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
