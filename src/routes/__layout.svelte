<script context="module">
  // import 'virtual:windi-base.css'
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

{#if setupResult}
  <slot />
  <div class="flex-grow my-lg" />
  <footer>
    <p tabindex="0">
      <span>Projects I am proud of </span> ・
      <a tabindex="0" href="https://docs.rainprotocol.xyz/intro/" target="_blank">Rain</a> ・
      <a tabindex="0" href="https://nextnature.net/" target="_blank">Next Nature</a>
      ・ <a tabindex="0" href="https://myylink.de/" target="_blank">myylink</a> ・
      <a href="https://sellby.de/" target="_blank">sellby</a>
    </p>
    <p tabindex="0" class="mt-md">
      <span tabindex="0">{`© ${new Date().getFullYear()} Kevin Michael Schott`}</span>
      ・
      <a tabindex="0" href="/">Home</a>
      ・
      <a tabindex="0" href="/legal">Imprint / GDPR</a>
    </p>
  </footer>
{/if}
