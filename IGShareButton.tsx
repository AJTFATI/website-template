import React from 'react'

export function InstagramCorner() {
  return (
    <a
      href="https://instagram.com/alexanderjordantaylor"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View my Instagram"
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '80px',
        height: '80px',
        zIndex: 1001,
        color: '#fff',
        backgroundColor: '#E1306C',
        clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        overflow: 'hidden',
        transition: 'transform 0.3s ease-in-out',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.firstElementChild?.classList.add('flutter')
      }}
      onMouseLeave={(e) => {
        e.currentTarget.firstElementChild?.classList.remove('flutter')
      }}
    >
      <svg
        cla


