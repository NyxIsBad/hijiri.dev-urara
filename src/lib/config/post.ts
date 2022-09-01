import type { PostConfig } from '$lib/types/post'

export const post: PostConfig = {
    bridgy: {
        post: ['mastodon']
    },
    comment: {
        use: ['Webmention', 'Giscus'],
        style: 'boxed',
        webmention: {
            username: 'hijiri.dev',
            sortBy: 'created',
            sortDir: 'down',
            form: true,
            commentParade: true
        },
        giscus: {
            // src: 'https://giscus.kwaa.dev/client.js',
            repo: 'nyxisbad/comments',
            repoID: 'R_kgDOHoUU3g=',
            category: 'General',
            categoryID: 'DIC_kwDOHoUU3s4CQHk8',
            reactionsEnabled: true,
            lang: 'en',
            // theme: 'urara'
            theme: 'preferred_color_scheme'
        }
    }
}
