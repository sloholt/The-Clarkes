import '../styles/pages/instructions-page.css'

export default function InstructionsPage() {
  return (
    <section className="instructions">
      <figure className="instructions__portrait">
        <img
          src="/images/bw_photo_wframe.png"
          alt="Elli and Winston, a framed black-and-white portrait"
        />
      </figure>

      <div className="instructions__copy">
        <p className="instructions__intro">
          As we step into this new chapter, it would mean so much to have you by
          our side on our special day. On this page, you&rsquo;ll discover
          everything you need &mdash; the schedule, venue details, dress code,
          RSVP information and a few extra touches.
        </p>

        <p className="instructions__signoff">Here's to the beginning of our forever</p>

        <p className="instructions__names">Elli &amp; Winston</p>
      </div>
    </section>
  )
}
