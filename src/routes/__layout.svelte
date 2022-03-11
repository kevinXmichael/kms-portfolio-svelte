<script context="module">
  import "virtual:windi.css"
  import "@/css/app.scss"
  import boot from "@/lib/boot"

  export const load = async () => {
    await Promise.allSettled([boot()])
    return {}
  }
</script>

<slot />
