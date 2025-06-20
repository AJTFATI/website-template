import { siteConfig } from './lib/site-config'

export default siteConfig({
  rootNotionPageId: '218c91e8e2ed803e82b9cef888b438c0', // Home page

  rootNotionSpaceId: null,

  name: 'Alexander J. Taylor',
  domain: 'alexanderjtaylor.com',
  author: 'Alexander J. Taylor',
  description:
    'Digital strategist and creative storyteller specializing in media, PR, and identity. Powered by clarity, built for impact.',

  linkedin: 'alexanderjtaylor',
github: 'ajtfati',


  twitter: null,
  newsletter: null,

  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  isPreviewImageSupportEnabled: true,
  isRedisEnabled: false,

  pageUrlOverrides: {
    '/about': '8eb98015af61496dbe2d452b307da8f8',
    '/blog': '202c91e8e2ed80fb9edfe24019cefe28',
    '/resume': 'd68cf42996674c649f41e55f8d0c957a',
    '/contact': 'bea930ea74ff49d4aaa408b7a18daff6'
  },

  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '8eb98015af61496dbe2d452b307da8f8'
    },
    {
      title: 'Blog',
      pageId: '202c91e8e2ed80fb9edfe24019cefe28'
    },
    {
      title: 'Resume',
      pageId: 'd68cf42996674c649f41e55f8d0c957a'
    },
    {
      title: 'Contact',
      pageId: 'bea930ea74ff49d4aaa408b7a18daff6'
    }
  ]
})
