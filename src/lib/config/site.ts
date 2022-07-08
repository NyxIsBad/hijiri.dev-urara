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
    photo: 'picture.jpg',
    status: '🌸',
    bio: 'Some random 17 year old'
  },
  themeColor: '#3D4451'
}
