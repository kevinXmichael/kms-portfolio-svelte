<script context="module" lang="ts">
  import "virtual:windi-components.css"
  import "virtual:windi-utilities.css"
  import "@/css/app.scss"
  import { browser } from "$app/env"
  import boot from "@/lib/boot"
  import CardButton from "$lib/CardButton.svelte"

  let setupResult = false

  async function init() {
    if (browser) {
      setupResult = await Promise.all([boot()])
      return setupResult
    } else {
      setupResult = true
    }
  }
  init()
</script>

<script lang="ts">
  // $: isHome = browser ? window?.location?.pathname == "/" || false : false
</script>

<div class="background-sliding" />
{#if setupResult}
  <slot />
  <footer class="w-full mt-lg">
    <h2 tabindex="0">More</h2>
    <CardButton class="mt-md" href="https://www.carstengreif.de/">
      <span>Amazing&nbsp;</span>
      <span class="link">UX/UI Design</span>
    </CardButton>
    <CardButton href="/legal" target="_self" class="mt-sm">
      {`© ${new Date().getFullYear()} kms695`}・
      <span class="link">Imprint / GDPR</span>
    </CardButton>
  </footer>
{/if}
