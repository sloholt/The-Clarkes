import { Link } from 'react-router-dom'
import '../styles/pages/our-story-page.css'

export default function OurStoryPage() {
  return (
    <main className="our-story">
      <img
        className="our-story__photo"
        src="/images/running_background_photo.png"
        alt="Elli and Winston running through a field"
      />
      <Link to="/" className="our-story__back">
        &larr; Back
      </Link>
    </main>
  )
}
