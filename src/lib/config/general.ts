import type { DateConfig, FeedConfig, FooterConfig, HeadConfig, HeaderConfig, ThemeConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'light',
    text: '🌕 Light',
  },
  {
    name: 'dark',
    text: '🌑 Dark',
  },
  {
    name: 'cupcake',
    text: '🧁 Cupcake',
  },
  {
    name: 'bumblebee',
    text: '🐝 Bumblebee',
  },
  {
    name: 'emerald',
    text: '✳️ Emerald',
  },
  {
    name: 'corporate',
    text: '🏢 Corporate',
  },
  {
    name: 'valentine',
    text: '🌸 Valentine',
  },
  {
    name: 'synthwave',
    text: '🌃 Synthwave',
  },
  {
    name: 'retro',
    text: '🌇 Retro',
  },
  {
    name: 'cyberpunk',
    text: '🌐 Cyberpunk',
  },
  {
    name: 'halloween',
    text: '🎃 Halloween',
  },
  {
    name: 'garden',
    text: '🏡 Garden',
  },
  {
    name: 'forest',
    text: '🌲 Forest',
  },
  {
    name: 'aqua',
    text: '💦 Aqua',
  },
  {
    name: 'lofi',
    text: '🎶 Lo-Fi',
  },
  {
    name: 'pastel',
    text: '🌈 Pastel',
  },
  {
    name: 'fantasy',
    text: '🐣 Fantasy',
  },
  {
    name: 'wirefream',
    text: '📱 Wireframe',
  },
  {
    name: 'black',
    text: '🖤 Black',
  },
  {
    name: 'luxury',
    text: '💰 Luxury',
  },
  {
    name: 'dracula',
    text: '🧛 Dracula',
  },
  {
    name: 'cmyk',
    text: '🖨️ CMYK',
  },
  {
    name: 'autumn',
    text: '🍂 Autumn',
  },
  {
    name: 'business',
    text: '🗄️ Business',
  },
  {
    name: 'acid',
    text: '🌧️ Acid',
  },
  {
    name: 'lemonade',
    text: '🍋 Lemonade',
  },
  {
    name: 'night',
    text: '🌃 Night',
  },
  {
    name: 'coffee',
    text: '☕ Coffee',
  },
  {
    name: 'winter',
    text: '❄️ Winter',
  },
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      link: '/site-index/personal',
      text: 'Personal Life',
    },
    {
      link: '/site-index/dev',
      text: 'Coding Things',
    },
    {
      link: '/site-index/akguides',
      text: 'AK Things',
    },
    {
      link: '/site-index/tl',
      text: 'Translations',
    },
    {
      link: '/about-me/',
      text: 'About Me',
    },
  ],
  search: {
    provider: 'duckduckgo',
  },
}

export const footer: FooterConfig = {
  nav: [
    {
      link: '/atom.xml',
      text: 'Feed',
    },
    {
      link: '/sitemap.xml',
      text: 'Sitemap',
    },
  ],
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    day: 'numeric',
    month: 'short',
    weekday: 'long',
    year: 'numeric',
  },
}

export const feed: FeedConfig = {}
