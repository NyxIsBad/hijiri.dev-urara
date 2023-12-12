import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'hijiri.dev',
  subtitle: 'Nyx\'s rant location',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    name: 'Nyx',
    avatar: '/assets/picture.jpg',
    status: '🌸',
    bio: 'Some random 19 year old on the internet at the University of Maryland. Majoring in CS and Math, with passion projects in Networking, Computer Systems, and for some reason Web Dev?',
    metadata: [
      {
        text: 'NyxIsBad',
        icon: 'mdi:github',
        link: 'https://github.com/nyxisbad'
      },
      {
        text: 'Nyx',
        icon: 'mdi:youtube',
        link: 'https://www.youtube.com/channel/UCx747M7g2UAN1LP7T5OaS2w'
      }
    ]
  },
  themeColor: '#3D4451'
}
