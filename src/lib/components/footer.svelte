<script lang='ts'>
  import { footer as footerConfig } from '$lib/config/general'
  import { site } from '$lib/config/site'

  // eslint-disable-next-line no-undef-init -- Svelte uses this default to make the prop optional
  let className: string | undefined = undefined
  export { className as class }
  export let sticky: boolean = false
  export let rounded: boolean = false
</script>

<footer
  class="footer footer-center bg-base-300 text-base-content shadow-inner p-8 {rounded
    ? 'rounded-box'
    : 'md:rounded-box'} {sticky ? 'sticky bottom-0 z-0 md:static' : ''} {className ?? ''}"
  id='footer'>
  <div class='prose'>
    <p>
      {#if footerConfig.nav}
        {#each footerConfig.nav as { link, text }, i}
          <a href={link} rel='noopener noreferrer external' target='_blank'>{text}</a>
          {#if i + 1 < footerConfig.nav.length}
            <span class='mr-1'>·</span>
          {/if}
        {/each}
        <br />
      {/if}
      Copyright © {footerConfig.since && footerConfig.since !== new Date().toJSON().substring(0, 4)
        ? `${footerConfig.since} - ${new Date().toJSON().substring(0, 4)}`
        : new Date().toJSON().substring(0, 4)}
      {site.author.name}
      <br />
      Based on
      <a
        class='tooltip tooltip-secondary hover:text-secondary'
        data-tip='🌸 [δ] - Based on MDsveX & SvelteKit 🌸'
        href='https://github.com/importantimport/urara'
        rel='noopener noreferrer external'
        target='_blank'>
        Urara
      </a> by importantimport.
      {#if footerConfig.html}
        <br />
        <!-- eslint-disable-next-line svelte/no-at-html-tags -- configured trusted footer markup -->
        {@html footerConfig.html}
      {/if}
    </p>
  </div>
</footer>
