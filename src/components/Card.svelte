<script>
  export let callback = () => {}
  export let description = false
  export let info = false
  export let title = ""
  export let tags = []
</script>

<article
  tabindex="0"
  class="card"
  id={title}
  on:click={callback}
  role="textbox"
  contenteditable="false"
>
  <div class="flex flex-row items-center w-full">
    <h2 tabindex="0">{title}</h2>
    <!-- {#if info}
      <div class="flex-grow" />
      <span tabindex="0">{info}</span>
    {/if} -->
  </div>
  <div class="flex-grow" />
  <div
    class="flex flex-col w-full h-full mt-md p-sm rounded-md bg-magic
          border-2 border-solid border-secondary pressable std-hover--scale"
  >
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
            class="text-small text-white text-cut rounded-md bg-secondary mr-sm mt-sm p-xs"
          >
            #{tag}
          </div>
        {/each}
      </div>
    {/if}
  </div>
</article>
