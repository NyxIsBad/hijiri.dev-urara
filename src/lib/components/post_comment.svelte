<script lang='ts'>
  import type { CommentConfig } from '$lib/types/post'

  import { toSnake } from '$lib/utils/case'

  type CommentProvider = Exclude<keyof CommentConfig, 'style' | 'use'>

  export let post: Urara.Post
  export let config: CommentConfig
  const comments = import.meta.glob<any>('/src/lib/components/comments/*.svelte', { eager: true, import: 'default' })
  let currentComment: CommentProvider | undefined
  let currentConfig: CommentConfig[CommentProvider] | undefined
  currentComment = (localStorage.getItem('comment') ?? toSnake(config.use[0])) as CommentProvider
  $: if (currentComment)
    currentConfig = config[currentComment]
</script>

{#if config?.use.length > 0}
  <div class='card card-body' id='post-comment'>
    {#if config.use.length > 1}
      <div
        class='w-full mb-8 tabs'
        class:tab-bordered={config?.style === 'bordered'}
        class:tab-lifted={config?.style === 'lifted'}
        class:tabs-boxed={config?.style === 'boxed'}>
        {#each config.use as name}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <span
            class='flex-1 transition-all tab'
            class:tab-active={currentComment === toSnake(name)}
            on:click={() => {
              currentComment = toSnake(name) as CommentProvider
              localStorage.setItem('comment', toSnake(name))
            }}>
            {name}
          </span>
        {/each}
      </div>
    {/if}
    {#if currentComment}
      {#key currentComment}
        <svelte:component
          config={currentConfig}
          {post}
          this={comments[`/src/lib/components/comments/${currentComment}.svelte`]} />
      {/key}
    {/if}
  </div>
{/if}
