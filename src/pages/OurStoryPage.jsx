import { Link } from 'react-router-dom'
import '../styles/pages/our-story-page.css'

export default function OurStoryPage() {
  return (
    <main className="our-story">
      <div className="our-story__hero">
        <img
          className="our-story__photo"
          src="/images/running_background_photo.png"
          alt="Elli and Winston running through a field"
        />
        <h1 className="our-story__title">Our Story</h1>
        <div className="our-story__text">
          <p>
            In true Calgary fashion, we met at a Stampede concert and were inseparable for the
            rest of the night. Exactly one week later, we spent five hours together over pizza and wine, a date we can only describe
            as “love at second sight.”
          </p>
          <p>
            The summer of 2022 was a whirlwind of weekends together, including flat tires, long hikes, heat stroke, meeting families; making the most of every moment
            before beginning three years of long-distance. What started with flights, FaceTime
            calls, and countless shared moments eventually became a shared home, shared dreams, and
            shared master’s degrees.
          </p>
          <p>
            Building a life filled with a love for travel and experiencing the
            world together. In the spring of 2026, while on a hike overlooking the ocean in Portugal 
            Winston proposed.
          </p>
          <p>
            We are incredibly grateful for all the love and adventures we have shared over the past
            five years, and for the people who have supported our journey along the way. We
            cannot wait to celebrate this milestone surrounded by our favourite people, with a
            weekend filled with love, laughter, and memories that we will carry with us for years to
            come.
          </p>
          <p>We are so excited for what lies ahead and to begin this next chapter together.</p>
          <p className="our-story__signoff">
            With Love,
            <br />
            Elli & Winston
          </p>
        </div>
      </div>
      <Link to="/" className="our-story__back">
        &larr; Back
      </Link>
    </main>
  )
}
