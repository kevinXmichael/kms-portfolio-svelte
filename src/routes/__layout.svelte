<script context="module" lang="ts">
  import "virtual:windi-components.css"
  import "virtual:windi-utilities.css"
  import "@/css/app.scss"
  import { browser } from "$app/env"
  import boot from "@/lib/boot"

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
  $: isHome = browser ? window?.location?.pathname == "/" || false : false
</script>

<div class="background-sliding" />
{#if setupResult}
  <slot />
  <div class="flex-grow mt-sm" />
  <div class="card p-md flex flex-col items-center justify-center">
    <p tabindex="0">
      <span tabindex="0">Looking for amazing UX/UI Design? Check out</span>
      <a tabindex="0" target="_blank" href="https://www.carstengreif.de/">Carsten Greif</a>.
    </p>
    <footer class="mt-sm">
      <p tabindex="0" class="mt-md">
        <span tabindex="0">{`© ${new Date().getFullYear()} Kevin Michael Schott`}</span>
        ・
        <a tabindex="0" href="/">Home</a>
        ・
        <a tabindex="0" href="/legal">Imprint / GDPR</a>
      </p>
    </footer>
  </div>
{/if}
