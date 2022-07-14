<script lang="ts">
  export let href = ""
  export let scale = true
  export let target = "_blank"
</script>

<a
  {href}
  {target}
  tabindex="0"
  class={`${$$props.class} ${
    scale && "std-hover--scale"
  } card flex flex-row items-center justify-center w-full min-h-3rem`}
>
  <slot />
</a>
