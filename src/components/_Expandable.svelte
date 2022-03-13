<!--
<script>
  export let classes = ""
  export let title = ""
  export let expandable = false
  export let expanded = !expandable
  $: expandSymbol = expanded ? "👇" : "👈"
  const maxWidth = "100%"

  function expand() {
    if (expandable) {
      expanded = !expanded
    }
  }
</script>

<section class={`flex flex-col w-full ${classes}`} role="group">
  <div
    class="card-style card-style--interact flex flex-row w-full items-center select-none cursor-pointer"
    style={`max-width: ${maxWidth};`}
    on:click={expand}
  >
    <h1>{title}</h1>
    {#if expandable}
      <div class="flex-grow mx-sm" />
      {expandSymbol}
    {/if}
  </div>

  {#if expanded}
    <div class="my-md fade-in">
      <slot />
    </div>
  {/if}
</section>
