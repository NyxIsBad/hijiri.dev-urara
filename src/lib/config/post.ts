import type { PostConfig } from '$lib/types/post'

export const post: PostConfig = {
  bridgy: {
    post: ['mastodon'],
  },
  comment: {
    giscus: {
      category: 'General',
      categoryID: 'DIC_kwDOHoUU3s4CQHk8',
      lang: 'en',
      reactionsEnabled: true,
      // src: 'https://giscus.kwaa.dev/client.js',
      repo: 'nyxisbad/comments',
      repoID: 'R_kgDOHoUU3g=',
      // theme: 'urara'
      theme: 'preferred_color_scheme',
    },
    style: 'boxed',
    use: ['Webmention', 'Giscus'],
    webmention: {
      commentParade: true,
      form: true,
      sortBy: 'created',
      sortDir: 'down',
      username: 'hijiri.dev',
    },
  },
}
