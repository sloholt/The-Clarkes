import { Link } from 'react-router-dom'
import '../styles/pages/our-story-page.css'

export default function OurStoryPage() {
  return (
    <main className="our-story">
      <div className="our-story__hero">
        <img
          className="our-story__photo"
          src="/images/story.png"
          alt="Elli and Winston running through a field"
        />
      </div>
      <Link to="/" className="our-story__back">
        &larr; Back
      </Link>
    </main>
  )
}
