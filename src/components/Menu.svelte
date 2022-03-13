<script>
  import Icon from "@/components/Icon.svelte"
  const menuItems = ["vita", "projects", "legal"]
  let selectedMenuItem = "vita"
</script>

<nav class="flex flex-row flex-nowrap bg-blurry rounded-md fixed bottom-0 m-auto">
  {#each menuItems as menu}
    <div
      class="flex flex-col flex-nowrap items-center justify-center px-md py-sm w-full h-full mx-md"
    >
      <Icon name={menu} />
      <span class="text-sm">{menu}</span>
    </div>
  {/each}
</nav>
