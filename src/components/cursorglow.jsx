import { useEffect, useState } from 'react'
import './CursorGlow.css'

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const mouseOver = (e) => {
      setHovering(!!e.target.closest('a, button, [data-cursor]'))
    }

    const mouseDown = () => setClicking(true)
    const mouseUp = () => setClicking(false)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', mouseOver)
    window.addEventListener('mousedown', mouseDown)
    window.addEventListener('mouseup', mouseUp)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', mouseOver)
      window.removeEventListener('mousedown', mouseDown)
      window.removeEventListener('mouseup', mouseUp)
    }
  }, [])

  return (
    <div
      className={`cursor-glow ${hovering ? 'cursor-hover' : ''} ${
        clicking ? 'cursor-click' : ''
      }`}
      style={{
        '--cursor-x': `${position.x}px`,
        '--cursor-y': `${position.y}px`,
      }}
    >
      <div className="cursor-dot" />
      <div className="cursor-ring" />
    </div>
  )
}