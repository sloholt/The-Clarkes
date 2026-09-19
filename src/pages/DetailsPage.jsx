import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages/details-page.css'

const IMG = '/images/details'
const REGISTRY_URL =
  'https://www.myregistry.com/wedding-registry/elli-anderson-and-winston-clarke-calgary-alberta/5608980/giftlist?publicUrlName=clarkeweddingregistry'
const MAP_URL =
  'https://www.google.com/maps/dir//Dreamers+Farm+Gatherings,+25243+Township+Rd+282,+Rocky+View+County,+AB+T4B+4N5/@51.0459904,-114.1047296,4176m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x537151064d06a54f:0xafbba766f12a5fe9!2m2!1d-114.2827532!2d51.3862113!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDkwNi4wIKXMDSoASAFQAw%3D%3D'

// Every measurement below is in Figma px on the 1280 x 4036 "details" frame
// (node 81:932). The stylesheet turns them into container-relative units so the
// whole page scales together, like the collage page.
const u = (n) => `calc(var(--u) * ${n})`

// element placed by its top-left corner
const at = (l, t, w, h) => ({
  left: u(l),
  top: u(t),
  width: u(w),
  ...(h !== undefined && { height: u(h) }),
})

// element placed by its centre point (how Figma lays out most of the text)
const mid = (cx, cy, w, h) => at(cx - w / 2, cy - h / 2, w, h)

function Txt({ box, size, spacing, className = '', children }) {
  return (
    <div
      className={`details__txt ${className}`}
      style={{
        ...box,
        fontSize: u(size),
        letterSpacing: spacing ? u(spacing) : undefined,
      }}
    >
      {children}
    </div>
  )
}

const rule = (l, t, w) => ({ left: u(l), top: u(t), width: u(w) })
const vrule = (l, t, h) => ({ left: u(l), top: u(t), height: u(h) })

const TIMELINE = [
  { time: '3:30 pm', label: 'Guest Arrival', y: 173.5 },
  { time: '4:00 pm', label: 'Ceremony', y: 272.5 },
  { time: '4:30 pm', label: 'Cocktail Hour', y: 371.5 },
  { time: '6:00 pm', label: 'Dinner', y: 470.5 },
  { time: '12:00 am', label: 'Last Call', y: 569.5 },
]

const FAQS = [
  {
    q: ['May I bring', 'a date', 'or plus-one?'],
    a: 'Our wedding is by invitation only due to venue capacity and our wishes for an intimate celebration. Only the guests listed on your invitation are invited to attend. Thank you so much for understanding.',
    y: 3053,
  },
  {
    q: ['What if I have dietary restrictions?'],
    a: 'Our entire menu will be gluten-free and celiac-safe, with dairy-free options also available. If you have any specific allergies or dietary restrictions, please include them in the allergies section of your RSVP so we can do our best to accommodate you.',
    y: 3320,
  },
  {
    q: ['Can I bring my little ones?'],
    a: 'We kindly ask that our wedding be an adults-only celebration. We hope this allows everyone to enjoy a special evening with us, so please plan childcare accordingly!',
    y: 3591,
  },
]

const SWATCHES = [
  { l: 300, color: '#b9cce1' },
  { l: 335, color: '#f6b875' },
  { l: 370, color: '#eda1b5' },
  { l: 405, color: '#c5d88a' },
]

export default function DetailsPage() {
  return (
    <main className="details">
      <div className="details__stage">
        {/* florals */}
        <img className="details__img" style={at(-78, 79, 1376, 459)} src={`${IMG}/calalily-border.png`} alt="" aria-hidden="true" />
        <img className="details__img" style={at(-117, 3699, 347, 386)} src={`${IMG}/single-calalily-border.png`} alt="" aria-hidden="true" />
        <img className="details__img" style={at(976, 3701, 322, 335)} src={`${IMG}/calalily-border-2.png`} alt="" aria-hidden="true" />

        {/* nav */}
        <nav className="details__nav" aria-label="Site">
          <Link to="/#collage" style={at(765, 2, 73, 52)}>Home</Link>
          <Link to="/our-story" style={at(855, 2, 137, 52)}>Our Story</Link>
          <Link to="mailto:ellianderson22@icloud.com" style={at(1009, 2, 138, 52)}>Contact</Link>
          <Link to="/#rsvp" style={at(1164, 2, 85, 52)}>RSVP</Link>
        </nav>
        <div className="details__rule details__rule--sage" style={rule(19, 60, 1250)} />
        <Txt box={at(19, 8, 32, 40)} size={30} className="details__mono details__mono--w details__mono--sm">W</Txt>
        <Txt box={at(39.8, 20.6, 32, 40)} size={30} className="details__mono details__mono--sm">E</Txt>

        {/* hero */}
        <Txt box={mid(640, 152, 220, 52)} size={34} spacing={3.4} className="details__sc">the finer</Txt>
        <Txt box={mid(640, 229.5, 276, 103)} size={96} className="details__display">Details</Txt>
        <div className="details__rule details__rule--sage" style={rule(602, 292, 75)} />
        <Txt box={mid(639.5, 341.5, 349, 83)} size={22} className="details__body">
          Everything you need to know for the celebration
        </Txt>
        <img className="details__img" style={at(602, 420, 80, 67)} src={`${IMG}/we-embossed.png`} alt="" aria-hidden="true" />

        {/* our day at a glance */}
        <section className="details__band details__band--green" style={at(0, 525, 1280, 678)} aria-label="Our day at a glance">
          <Txt box={mid(639.5, 71, 437, 52)} size={34} spacing={3.4} className="details__sc details__accent">Our Day at a Glance</Txt>
          <Txt box={mid(639.5, 108.5, 187, 25)} size={20} spacing={2} className="details__sc details__pale">August 7th, 2027</Txt>
          <div className="details__rule details__rule--pale" style={rule(403, 109, 125)} />
          <div className="details__rule details__rule--pale" style={rule(754, 109, 125)} />

          <div className="details__vrule details__vrule--pale" style={vrule(482.5, 206, 421)} />
          <div className="details__vrule details__vrule--pale" style={vrule(640.5, 192, 400)} />

          {TIMELINE.map(({ time, label, y }) => (
            <Fragment key={time}>
              <div className="details__lace" style={at(463, y - 4.5, 38, 40)}>
                <img src={`${IMG}/lace-circle.png`} alt="" aria-hidden="true" />
              </div>
              <Txt box={mid(time === '12:00 am' ? 387.5 : 391.5, y, time === '12:00 am' ? 145 : 137, 25)} size={32} spacing={3.2} className="details__sc details__accent">{time}</Txt>
              <Txt box={mid(392, y + 27.5, 150, 30)} size={20} spacing={2} className="details__body details__ivory details__nowrap">{label}</Txt>
            </Fragment>
          ))}

          <Txt box={mid(964.5, 393.5, 423, 457)} size={24} className="details__body details__ivory details__glance-copy">
            <p>
              Our ceremony will take place at Dreamers Farm at <strong>4:00 pm sharp</strong>.
            </p>
            <p>
              <strong>Please arrive by 3:30 pm</strong> to allow plenty of time to settle in and find your seat.
            </p>
            <p>
              Following the ceremony, we&rsquo;ll celebrate with drinks and appetizers before gathering for dinner, speeches and an evening of celebration.
            </p>
          </Txt>
        </section>

        {/* the venue */}
        <img className="details__img" style={at(316, 1267, 617, 206)} src={`${IMG}/farm-image.png`} alt="Illustration of Dreamers Farm" />
        <Txt box={mid(624.5, 1267, 189, 52)} size={34} spacing={3.4} className="details__sc details__green">the venue</Txt>
        <Txt box={mid(640.5, 1501.5, 363, 57)} size={48} spacing={4.8} className="details__display details__green">Dreamers Farm</Txt>
        <Txt box={mid(640.5, 1557.5, 313, 41)} size={16} spacing={1.6} className="details__body details__green">
          25243 Township Rd 282,<br />Rocky View County, AB T4B 4N5
        </Txt>
        <Txt box={mid(640, 1671.5, 678, 173)} size={16} spacing={1.6} className="details__body details__green details__stack">
          <p><em className="details__medium">Please note that you will turn right just before reaching the property.</em></p>
          <p>
            We ask that everyone drive responsibly and make arrangements for transportation if you plan to drink.{' '}
            <strong>Drinking and driving will not be permitted.</strong>
          </p>
          <p>
            As overnight parking is not available at the venue, vehicles cannot be left on the property overnight. Please plan your transportation accordingly.
          </p>
        </Txt>
        <a
          className="details__badge"
          style={at(505, 1741, 270, 90)}
          href={MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get directions to Dreamers Farm on Google Maps"
        >
          <img src={`${IMG}/location-badge.png`} alt="View on Google Maps" />
        </a>

        <div className="details__rule details__rule--sage" style={rule(141, 1869, 993)} />

        {/* attire */}
        <Txt box={mid(365.5, 1935, 189, 52)} size={34} spacing={3.4} className="details__sc details__green">attire</Txt>
        <Txt box={mid(365, 1999.5, 138, 57)} size={48} className="details__display details__green">Formal</Txt>
        <div className="details__rule details__rule--sage" style={rule(330, 1965, 70)} />
        <Txt box={mid(366, 2088.5, 392, 77)} size={18} spacing={1.8} className="details__body">
          We would love for you to join us in formal attire. We&rsquo;ve included our wedding color palette below for anyone who would like to draw inspiration from these tones.
        </Txt>
        {SWATCHES.map(({ l, color }) => (
          <span key={l} className="details__swatch" style={{ ...at(l, 2160, 25, 25), height: u(25), background: color }} />
        ))}
        <Txt box={mid(365, 2199, 164, 20)} size={13} spacing={1.3} className="details__sc details__green">suggested palette</Txt>

        <div className="details__vrule details__vrule--sage" style={vrule(638, 1935, 321)} />

        {/* travel + stay */}
        <Txt box={mid(918.5, 1935, 283, 52)} size={34} spacing={3.4} className="details__sc details__green">travel + stay</Txt>
        <div className="details__rule details__rule--sage" style={rule(896, 1961, 47)} />
        <Txt box={mid(918, 2055, 432, 156)} size={18} spacing={1.8} className="details__body details__stack">
          <p>For those travelling from out of town, Airdrie, Cochrane, Crossfield and Northwest Calgary all offer a variety of hotel and Airbnb options.</p>
          <p>If you would like specific recommendations, please feel free to reach out to us.</p>
        </Txt>
        <img className="details__img" style={at(892, 2142, 54, 52)} src={`${IMG}/bed.svg`} alt="" aria-hidden="true" />

        {/* registry */}
        <section className="details__band details__band--green" style={at(0, 2294, 1280, 521)} aria-label="Registry" />
        <Txt box={mid(641, 2361, 656, 52)} size={34} spacing={3.4} className="details__sc details__beige">registry</Txt>
        <Txt box={mid(641, 2536, 644, 252)} size={20} className="details__body details__ivory details__stack">
          <p>Your presence in our lives is truly the greatest gift of all, and we are so grateful to celebrate this milestone surrounded by the people we love.</p>
          <p>For those who would like, we will have a wishing well at the wedding for contributions toward our honeymoon &amp; buying a home. This is our preferred option as we currently have everything we need!</p>
          <p>We have also created a small registry for friends and family who would prefer to give a physical gift.</p>
        </Txt>
        <a
          className="details__badge"
          style={at(506, 2685, 270, 90)}
          href={REGISTRY_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View our wedding registry"
        >
          <img src={`${IMG}/registry-badge.png`} alt="View our registry" />
        </a>

        {/* faq */}
        <Txt box={mid(635, 2879, 656, 52)} size={34} spacing={3.4} className="details__sc details__green">frequently asked questions</Txt>
        <div className="details__vrule details__vrule--sage details__vrule--thick" style={vrule(505, 2943, 200)} />
        <div className="details__rule details__rule--sage" style={rule(212, 3181, 850)} />
        <div className="details__vrule details__vrule--sage details__vrule--thick" style={vrule(505, 3221, 200)} />
        <div className="details__rule details__rule--sage" style={rule(209, 3459, 850)} />
        <div className="details__vrule details__vrule--sage details__vrule--thick" style={vrule(505, 3499, 200)} />
        {FAQS.map(({ q, a, y }) => (
          <Fragment key={a}>
            <Txt box={mid(335, y, 280, 193)} size={28} spacing={2.8} className="details__faq-q">
              {q.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </Txt>
            <Txt box={mid(802, y, 514, 177)} size={20} spacing={2} className="details__body">{a}</Txt>
          </Fragment>
        ))}

        <img className="details__img" style={at(567, 3897, 147, 123)} src={`${IMG}/we-embossed.png`} alt="" aria-hidden="true" />
      </div>
    </main>
  )
}
