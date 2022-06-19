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
  <div class="flex-grow my-md" />
  <footer class="<md:text-center">
    <p tabindex="0">
      {`© ${new Date().getFullYear()} Kevin Michael Schott`}
      ・
      <a tabindex="0" href="/">Home</a>
      ・
      <a tabindex="0" href="/legal">Imprint / GDPR</a>
    </p>
  </footer>
{/if}
