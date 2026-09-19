import '../styles/components/contact.css'

export default function ContactComponent() {
  return (
    <section className="contact" id="contact">
      <div className="contact__stage">
        <img
          className="contact__fade"
          src="/images/calalily_fade.png"
          alt=""
          aria-hidden="true"
        />

        {/* lilies on the right (node 131:5) */}
        <img
          className="contact__lilies"
          src="/images/contact_calalilies.png"
          alt=""
          aria-hidden="true"
        />

        {/* WE monogram leading the closing line (node 134:26) */}
        <img className="contact__logo" src="/images/WE_green.png" alt="" aria-hidden="true" />

        <div className="contact__copy">
          <h2 className="contact__title">questions?</h2>
          <p className="contact__text">
            If there is anything we haven&rsquo;t covered, please reach out to us at{' '}
            <a href="mailto:ellianderson22@icloud.com">ellianderson22@icloud.com</a>
          </p>
          <p className="contact__text contact__text--closing">
            can&rsquo;t wait to celebrate with you!
          </p>
        </div>
      </div>
    </section>
  )
}
