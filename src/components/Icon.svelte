<script>
  import { onMount } from "svelte"
  import icons from "@/lib/icons"
  import { createEventDispatcher } from "svelte"
  export let name = false
  export let caption = false
  export let classes = "text-white"
  const dispatch = createEventDispatcher()
  let svgWrapper

  onMount(ensureSvgColors)
  function ensureSvgColors() {
    try {
      const size = "1.75rem"
      const svg = svgWrapper.children[0]
      svg.style.fill = "currentColor"
      svg.style.stroke = "currentColor"
      svg.style.width = "100%"
      svg.style.maxWidth = size
      svg.style.height = "100%"
      svg.style.maxHeight = size
    } catch (err) {
      console.error(`🚨 Cannot ensure svg colors for icon '${name}' because of: ${err}`)
    }
  }
</script>

<div
  class={`${classes} flex flex-col flex-nowrap text-hover select-none cursor-pointer items-center justify-center w-full h-full`}
  bind:this={svgWrapper}
  on:click={() => dispatch("click")}
>
  {@html icons.get(name)}
  {#if caption}
    <span class="text-sm font-bold">{caption}</span>
  {/if}
</div>
