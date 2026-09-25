<script lang='ts'>
  import { date } from '$lib/config/general'
  import { site } from '$lib/config/site'

  export let post: Urara.Post
  export let preview: boolean = false
  const stringPublished = new Date(post.published ?? post.created).toLocaleString(date.locales, date.options)
  const stringUpdated = new Date(post.updated ?? post.published ?? post.created).toLocaleString(date.locales, date.options)
  const jsonPublished = new Date(post.published ?? post.created).toJSON()
  const jsonUpdated = new Date(post.updated ?? post.published ?? post.created).toJSON()
</script>

<div class='flex font-semibold gap-1.5' class:md:mb-4={!preview && post.type !== 'article'}>
  <a
    class='opacity-75 duration-500 ease-in-out h-card hover:opacity-100 hover:text-primary p-author'
    class:hidden={preview}
    href={site.protocol + site.domain}
    rel='author'>
    {site.author.name}
  </a>
  <span class='opacity-50' class:hidden={preview}>/</span>
  <a class='u-url u-uid swap group/time' href={post.path}>
    <time
      class='font-semibold opacity-75 duration-500 ease-in-out mr-auto group-hover/time:opacity-0 dt-published'
      datetime={jsonPublished}
      itemprop='datePublished'>
      {stringPublished}
    </time>
    <time
      class='font-semibold duration-500 ease-in-out mr-auto opacity-0 group-hover/time:opacity-100 text-primary dt-updated'
      datetime={jsonUpdated}
      itemprop='dateModified'>
      {stringUpdated}
    </time>
  </a>
</div>
