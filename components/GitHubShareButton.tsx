import styles from './styles.module.css'

{/* <GitHubShareButton /> */}
<InstagramCorner />
export function InstagramCorner() {
  return (
    <a
      href=https://instagram.com/alexanderjordantaylor
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Say hi on IG"
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
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 448 512"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.14-30.16C296.24,124,224,124,224,124s-72.24,0-94.57,7.5a54,54,0,0,0-30.14,30.16C91.79,149.76,88,177.87,88,224s3.79,74.24,11.29,94.57a54,54,0,0,0,30.14,30.16C151.76,364,224,364,224,364s72.24,0,94.57-7.5a54,54,0,0,0,30.14-30.16C356.21,298.24,360,270.13,360,224S356.21,149.76,348.71,161.66ZM224,338a114,114,0,1,1,114-114A114.12,114.12,0,0,1,224,338ZM338.48,162.39a26.67,26.67,0,1,1,26.66-26.66A26.66,26.66,0,0,1,338.48,162.39Z" />
      </svg>
    </a>
  )
}
