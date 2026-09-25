<script lang='ts'>
  import { site } from '$lib/config/site'
  import Icon from '@iconify/svelte'
</script>

<div
  class='flex flex-col gap-4 sticky p-4 border-base-content/10 top-24 card h-card card-body items-right xl:border-2 xl:py-8 xl:ml-auto xl:mr-8 xl:max-w-xs'>
  <a class='hidden u-url u-uid' href={site.protocol + site.domain}>{site.author.name}</a>
  <figure class='mx-auto group relative'>
    {#if site.author.avatar}
      <img
        alt={site.author.name}
        class='rounded-full u-photo z-10 shadow-xl hover:shadow-2xl transition-shadow w-24 h-24 md:w-32 md:h-32'
        src={site.author.avatar} />
    {/if}
    {#if site.author.status}
      <div
        class='rounded-full bottom-0 bg-base-100 shadow-xl text-lg absolute z-20 w-8 h-8 md:w-10 md:h-10 right-0 md:text-xl text-center py-0.5 md:py-1.5'>
        {site.author.status}
      </div>
    {/if}
  </figure>
  <div class='text-center flex flex-col gap-2'>
    <h2 class='mt-0 font-bold p-name text-2xl mb-2'>{site.author.name}</h2>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -- configured trusted profile markup -->
    <p class='opacity-75 p-note'>{@html site.author.bio}</p>
    {#if site.author.metadata}
      <div class='flex gap-1 flex-wrap justify-center'>
        {#each site.author.metadata as { icon, link, rel, text }}
          {#if link}
            <a
              class='btn btn-sm btn-ghost normal-case gap-2 u-url'
              class:btn-square={!text}
              href={link}
              rel={rel ?? 'me noopener noreferrer external'}
              target='_blank'>
              {#if icon}
                <Icon class='!w-5 !h-5' {icon} />
              {/if}
              {#if text}
                {text}
              {/if}
            </a>
          {:else}
            <button class='btn btn-sm btn-ghost normal-case gap-2' class:btn-square={!text}>
              {#if icon}
                <Icon class='!w-5 !h-5' {icon} />
              {/if}
              {#if text}
                {text}
              {/if}
            </button>
          {/if}
        {/each}
      </div>
    {/if}
  </div>
</div>
