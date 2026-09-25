<script lang='ts'>
  export let post: Urara.Post
  const actions = import.meta.glob<any>('/src/lib/components/actions/*.svelte', { eager: true, import: 'default' })
</script>

<div class='sticky hidden flex-col gap-4 top-24 justify-center xl:flex w-fit h-[calc(100vh-12rem)] ml-auto mr-8 my-8'>
  {#if Object.keys(actions).length}
    {#each Object.values(actions) as action}
      <svelte:component {post} this={action} />
    {/each}
  {/if}
</div>
