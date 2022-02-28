<script>
  export let callback = () => {}
  export let description = false
  export let url = false
  export let info = false
  export let title = ""
  export let tags = []
</script>

<div class="card" on:click={callback}>
  <div class="flex flex-row items-center w-full">
    <h2>{title}</h2>
    {#if info}
      <div class="flex-grow" />
      <span>{info}</span>
    {/if}
  </div>
  <div class="flex-grow" />
  <div class="flex flex-col w-full h-full mt-md bg-primary p-sm rounded-md">
    {#if description}
      <div>{description}</div>
    {:else}
      <slot />
    {/if}
    {#if tags && tags.length > 0}
      <div class="flex-grow" />
      <div class="pt-xs flex flex-row flex-wrap items-center w-full">
        {#each tags as tag}
          <div class="text-small text-white rounded-md bg-blurry mr-sm mt-sm p-xs">
            #{tag}
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>
