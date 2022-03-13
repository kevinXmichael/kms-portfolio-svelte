<script>
  import Icon from "@/components/Icon.svelte"
  import { menuItems, selectedMenuItem } from "@/lib/store"

  function selected(menu) {
    selectedMenuItem.set(menu)
    window.scrollTo({ top: 0, left: 0 /* behavior: "smooth" */ })
  }
</script>

<nav
  class="flex flex-row flex-nowrap bg-primary fixed bottom-0 m-auto
          <md:border-t-2 <md:border-0 border-solid border-secondary border-2
          md:rounded-md md:bottom-2 <md:w-full
          <md:justify-evenly justify-center"
>
  {#each menuItems as menu}
    <Icon
      on:click={() => selected(menu)}
      name={menu}
      caption={menu}
      classes={`md:mx-lg mx-md p-sm ${$selectedMenuItem === menu && "text-secondary-variant"}`}
    />
  {/each}
</nav>
