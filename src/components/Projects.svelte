<script>
  import Card from "@/components/Card.svelte"
  import { projects } from "@/lib/projects"

  function openProjectURL(url = false) {
    if (url) {
      window.open(url, "_blank")
    }
  }
</script>

<div class="grid sm:grid-cols-2 grid-cols-1 gap-md w-full">
  {#each Object.keys(projects).sort((a, b) => b - a) as year}
    {#each projects[year] as project}
      <Card
        callback={() => openProjectURL(project.url)}
        description={project.description}
        title={project.name}
        url={project.url}
        info={year}
        tags={project.techstack}
      />
    {/each}
  {/each}
</div>
