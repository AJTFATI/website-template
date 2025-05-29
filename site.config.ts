import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '7875426197cf461698809def95960ebf',


export default {
  rootNotionPageId: 'a557d4b9a1044e90b3e96d3dce10fc5a', // Home page

  rootNotionSpaceId: null,

  name: 'Alexander J. Taylor',
  domain: 'alexanderjtaylor.com',
  author: 'Alexander J. Taylor',
  description:
    'Digital strategist and creative storyteller specializing in media, PR, and identity. Powered by clarity, built for impact.',

  github: 'ajtfati',
  linkedin: 'alexanderjtaylor',
  instagram: 'alexanderjtaylor',
  twitter: null,
  newsletter: null,

  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  isPreviewImageSupportEnabled: true,
  isRedisEnabled: false,

  pageUrlOverrides: {
    '/about': 'c9d8729f6e6747a2b92bd370aa1cf84e',
    '/blog': '90328a1ad2d948cc84f181ef2545942e',
    '/resume': '6e9a4c5f9aa54350909b77006ec94899',
    '/contact': 'b0b4bb95b5e54f4087efc4a49897f1ee'
  },

  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'c9d8729f6e6747a2b92bd370aa1cf84e'
    },
    {
      title: 'Blog',
      pageId: '90328a1ad2d948cc84f181ef2545942e'
    },
    {
      title: 'Resume',
      pageId: '6e9a4c5f9aa54350909b77006ec94899'
    },
    {
      title: 'Contact',
      pageId: 'b0b4bb95b5e54f4087efc4a49897f1ee'
    }
  ]
}

