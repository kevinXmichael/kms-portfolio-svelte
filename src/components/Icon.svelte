<script>
  import { onMount } from "svelte"
  import icons from "@/lib/icons"
  export let name = false
  export let classes = ""
  let svgWrapper
  const size = "1.75rem"
  const sizeStyle = `width: ${size}; min-width: ${size}; max-width: ${size};
                    height: ${size}; min-height: ${size}; max-height: ${size};`

  onMount(ensureSvgColors)
  function ensureSvgColors() {
    try {
      const svg = svgWrapper.children[0]
      svg.style.fill = "currentColor"
      svg.style.stroke = "currentColor"
      svg.style.width = "100%"
      svg.style.height = "100%"
    } catch (err) {
      console.error(`🚨 Cannot ensure svg colors for icon '${name}' because of: ${err}`)
    }
  }
</script>

<div class={`${classes} text-white`} bind:this={svgWrapper} style={sizeStyle}>
  {@html icons.get(name)}
</div>
