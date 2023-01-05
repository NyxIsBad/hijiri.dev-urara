import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: 'hijiri.dev',
  title: 'hijiri.dev',
  subtitle: 'Nyx\'s rant location',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    name: 'Nyx',
    photo: '/assets/picture.jpg',
    status: '🌸',
    bio: 'Some random 18 year old on the internet at the University of Maryland. Majoring in CS and Math, with passion projects in Networking, Computer Systems, and for some reason Web Dev',
    metadata: [
      {
        text: 'NyxIsBad',
        icon: '/assets/github.svg',
        link: 'https://github.com/nyxisbad'
      }
    ]
  },
  themeColor: '#3D4451'
}
