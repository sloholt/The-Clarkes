import { Link } from 'react-router-dom'
import '../styles/pages/collage-page.css'

const BG = '/images/collage_page_background.png'
const DETAILS_BLOCK = '/images/details%20block.png'
const STATIC_ELEMENTS = '/images/static%20elements.png'
const OUR_STORY = '/images/our%20story.png'

export default function CollagePage() {
  return (
    <section className="collage" id="collage">
      <div className="collage__stage">
        <img className="collage__bg" src={BG} alt="" aria-hidden="true" />

        {/* envelope, photo strip, save-the-date card and florals (node 91:5) */}
        <img
          className="collage__el collage__el--static"
          src={STATIC_ELEMENTS}
          alt="A scrapbook of engagement photos, an open envelope, and a save-the-date card for 7th August 2027 at Dreamers Farm, Alberta"
        />

        {/* round card — "View Details Here" (Figma node 75:912) → opens the Details page */}
        <Link
          to="/details"
          className="collage__el collage__el--details collage__link"
          aria-label="View details"
        >
          <img src={DETAILS_BLOCK} alt="View details here" />
        </Link>

        {/* green badge — "Our Story / click here" (node 75:922) → opens the Our Story page */}
        <Link
          to="/our-story"
          className="collage__el collage__el--story collage__link"
          aria-label="Read our story"
        >
          <img src={OUR_STORY} alt="Our story — click here" />
        </Link>
      </div>
    </section>
  )
}
