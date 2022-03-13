<script>
  import Legal from "@/components/Legal.svelte"
  import Profile from "@/components/Profile.svelte"
  import Projects from "@/components/Projects.svelte"
  import { vita, projects, legal, selectedMenuItem } from "@/lib/store"

  $: isVita = $selectedMenuItem === vita
  $: isProjects = $selectedMenuItem === projects
  $: isLegal = $selectedMenuItem === legal
</script>

<div class={!isVita && "hidden"}>
  <Profile />
</div>

<div class={!isProjects && "hidden"}>
  <Projects />
</div>

<div class={!isLegal && "hidden"}>
  <Legal />
</div>
