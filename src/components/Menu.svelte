<script>
  import Icon from "@/components/Icon.svelte"
  const menuItems = ["vita", "projects", "legal"]
  let selectedMenuItem = "vita"
</script>

<nav class="flex flex-row flex-nowrap bg-blurry rounded-md <md:w-full fixed bottom-0 m-auto">
  {#each menuItems as menu}
    <Icon
      on:click={() => (selectedMenuItem = menu)}
      name={menu}
      caption={menu}
      classes="mx-md p-sm"
    />
  {/each}
</nav>
