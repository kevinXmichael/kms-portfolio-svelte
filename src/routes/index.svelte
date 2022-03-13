<script>
  import Legal from "@/components/Legal.svelte"
  import Profile from "@/components/Profile.svelte"
  import Projects from "@/components/Projects.svelte"
  import { vita, projects, legal, selectedMenuItem } from "@/lib/store"

  $: isVita = $selectedMenuItem === vita
  $: isProjects = $selectedMenuItem === projects
  $: isLegal = $selectedMenuItem === legal
</script>

<div class={isVita ? "fade-in" : "hidden"}>
  <Profile />
</div>

<div class={isProjects ? "fade-in" : "hidden"}>
  <Projects />
</div>

<div class={isLegal ? "fade-in" : "hidden"}>
  <Legal />
</div>
