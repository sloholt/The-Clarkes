import { Routes, Route, Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="container" style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem 0' }}>
      <Link to="/" className="text-base">Home</Link>
      <Link to="/details" className="text-base">Details</Link>
      <Link to="/rsvp" className="text-base">RSVP</Link>
    </nav>
  )
}

function Home() {
  return (
    <section className="section container text-center">
      <p className="subheading">Welcome to the wedding of</p>
      <h1 className="display">Elli & Winston</h1>
      <p className="text-base">We can't wait to celebrate with you.</p>
      <a href="/rsvp" className="btn">RSVP</a>
    </section>
  )
}

function Details() {
  return (
    <section className="section container">
      <h2 className="subheading">Details</h2>
      <p className="text-base">Ceremony and reception information goes here.</p>
    </section>
  )
}

function Rsvp() {
  return (
    <section className="section container">
      <h2 className="subheading">RSVP</h2>
      <p className="text-base">RSVP form goes here.</p>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/rsvp" element={<Rsvp />} />
      </Routes>
    </>
  )
}
