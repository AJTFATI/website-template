import styles from './styles.module.css'

export function InstagramHubShareButton() {
  return (
    <a
      href="https://instagram.com/alexanderjordantaylor"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.instagramCorner}
      aria-label="DM me on Instagram"
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 250 250"
        style={{
          fill: '#E1306C',
          color: '#fff',
          position: 'absolute',
          zIndex: 1001,
          top: 0,
          right: 0,
          border: 0,
          transform: 'scale(1, 1)'
        }}
        aria-hidden="true"
      >
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
        <text
          x="120"
          y="140"
          textAnchor="middle"
          fontSize="14"
          fontFamily="Arial, sans-serif"
          fill="white"
        >
          IG
        </text>
      </svg>
    </a>
  )
}
