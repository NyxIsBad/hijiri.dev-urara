import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: '/assets/picture.jpg',
    bio: 'Some random 21 year old researcher on the internet at the University of Maryland. Majoring in CS and Math, with passion projects in ML/AI, Cybersecurity, and for some reason a lot of Web Dev?',
    metadata: [
      {
        icon: 'lucide:github', // see https://icon-sets.iconify.design/heroicons/, components
        link: 'https://github.com/nyxisbad',
        text: 'NyxIsBad',
      },
      {
        icon: 'lucide:youtube',
        link: 'https://www.youtube.com/channel/UCx747M7g2UAN1LP7T5OaS2w',
        text: 'Nyx',
      },
    ],
    name: 'Nyx',
    status: '🌸',
  },
  description: 'Powered by SvelteKit/Urara',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'hijiri.dev',
  lang: 'en-US',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  subtitle: 'Nyx\'s rant location',
  themeColor: '#3D4451',
  title: 'hijiri.dev',
}
