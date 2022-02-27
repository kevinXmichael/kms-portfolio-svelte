<script>
  export let classes = ""
  export let title = ""
  export let expandable = false
  export let expanded = !expandable
  $: expandSymbol = expanded ? "⬆︎" : "⬇︎"
  const maxWidth = "100%"

  function expand() {
    if (expandable) {
      expanded = !expanded
    }
  }
</script>

<div class={`flex flex-col w-full h-full ${classes}`}>
  <div
    class="flex flex-row w-full items-center select-none cursor-pointer"
    style={`max-width: ${maxWidth};`}
    on:click={expand}
  >
    <h1 class="uppercase">{title}</h1>
    {#if expandable}
      <div class="flex-grow mx-sm" />
      {expandSymbol}
    {/if}
  </div>
  <div
    class="mb-md bg-magic w-full"
    style={`min-height: .25rem; width: 100%; max-width: ${maxWidth};`}
  />

  {#if expanded}
    <slot />
  {/if}
</div>
