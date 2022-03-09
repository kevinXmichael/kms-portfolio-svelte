<script>
  export let callback = () => {}
  export let description = false
  export let url = false
  export let info = false
  export let title = ""
  export let tags = []
</script>

<article tabindex="0" class="card" on:click={callback} role="textbox" contenteditable="false">
  <div class="flex flex-row items-center w-full">
    <h2 tabindex="0" id="card-title">{title}</h2>
    {#if info}
      <div class="flex-grow" />
      <span tabindex="0" id="card-info">{info}</span>
    {/if}
  </div>
  <div class="flex-grow" />
  <div class="flex flex-col w-full h-full mt-md bg-primary p-sm rounded-md nice-list">
    {#if description}
      <summary
        id="card-description"
        role="textbox"
        aria-multiline="true"
        aria-required="true"
        contenteditable="false"
        tabindex="0"
      >
        {description}
      </summary>
    {:else}
      <slot tabindex="0" />
    {/if}
    {#if tags && tags.length > 0}
      <div class="flex-grow" />
      <div class="pt-xs flex flex-row flex-nowrap items-center w-full">
        {#each tags as tag}
          <div
            tabindex="0"
            id="card-tags"
            class="text-small text-white text-cut rounded-md bg-blurry mr-sm mt-sm p-xs"
          >
            #{tag}
          </div>
        {/each}
      </div>
    {/if}
  </div>
</article>
