import { useState } from 'react'
import '../styles/components/envelope.css'

const CLOSED_SRC = '/images/envelope-closed.png'
const OPEN_SRC = '/images/envelope-open.png'

export default function Envelope({ defaultOpen = false, onToggle, children }) {
  const [open, setOpen] = useState(defaultOpen)

  const toggle = () => {
    setOpen((prev) => {
      const next = !prev
      onToggle?.(next)
      return next
    })
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggle()
    }
  }

  return (
    <div className="envelope-scene">
      <button
        type="button"
        className={`envelope${open ? ' envelope--open' : ''}`}
        aria-expanded={open}
        aria-label={open ? 'Close the invitation' : 'Open the invitation'}
        onClick={toggle}
        onKeyDown={handleKeyDown}
      >
        <img className="envelope__render envelope__render--open" src={OPEN_SRC} alt="" />
        <img
          className="envelope__render envelope__render--closed"
          src={CLOSED_SRC}
          alt="A cream envelope with a lace trim"
        />
        {children ? <div className="envelope__contents">{children}</div> : null}
      </button>
    </div>
  )
}
