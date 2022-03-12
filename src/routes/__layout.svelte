<script context="module">
  // import "virtual:windi.css"
  // import 'virtual:windi-base.css'
  import "virtual:windi-components.css"
  import "virtual:windi-utilities.css"
  import "@/css/app.scss"
  import boot from "@/lib/boot"

  export const load = async () => {
    await Promise.allSettled([boot()])
    return {}
  }
</script>

<slot />
