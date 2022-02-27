<script>
  import { projects } from "@/lib/projects"
  export let classes
</script>

<div class={classes}>
  {#each Object.keys(projects).sort((a, b) => b - a) as year}
    {#each projects[year] as project}
      <div>
        {project.name}, {year}
      </div>
    {/each}
  {/each}
</div>
