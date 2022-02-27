<script>
  import { projects } from "@/lib/projects"
  export let classes

  const cardWrapperHeight = "12rem"
  const cardWrapperStyle = `height: ${cardWrapperHeight}; min-height: ${cardWrapperHeight}; max-height: ${cardWrapperHeight}; width: 100%`

  function openProjectURL(url = false) {
    if (url) {
      window.open(url, "_blank")
    }
  }
</script>

<div class={classes}>
  {#each Object.keys(projects).sort((a, b) => b - a) as year}
    {#each projects[year] as project}
      <div
        class="p-sm rounded-md bg-primary-variant flex flex-col items-center w-full h-full std-hover std-hover--glow std-hover--scale pressable text-no-select bg-magic"
        style={cardWrapperStyle}
        on:click={() => openProjectURL(project.url)}
      >
        <div class="flex flex-row w-full p-sm items-center">
          <h2>{project.name}</h2>
          <div class="flex-grow" />
          <span>{year}</span>
        </div>
        <div class="flex-grow" />
        <div class="flex flex-col w-full h-full mt-md bg-primary p-sm rounded-md">
          <div>{project.description}</div>
          <div class="pt-xs flex flex-row flex-wrap w-full h-full items-center">
            {#each project.techstack as tech}
              <div class="text-small text-primary rounded-md bg-primary-variant mr-sm mt-sm p-xs">
                #{tech}
              </div>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  {/each}
</div>
