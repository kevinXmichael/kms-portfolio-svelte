<script context="module">
  // import 'virtual:windi-base.css'
  import "virtual:windi-components.css"
  import "virtual:windi-utilities.css"
  import "@/css/app.scss"
  import boot from "@/lib/boot"
  import Menu from "@/components/Menu.svelte"
  import { locale, loadTranslations } from "@/i18n"
  let setupResult = false

  export const load = async ({ url }) => {
    const { pathname } = url
    const defaultLocale = "en"
    setupResult = await Promise.allSettled([boot(), loadTranslations(defaultLocale, pathname)])
    return setupResult
  }
</script>

{#if setupResult}
  <slot />
  <div class="flex-grow my-lg" />
  <Menu />
{/if}
