<script>
  import pb from "@/assets/profile-pic.png"
  export let classes
</script>

<header
  role="heading"
  class={`${classes} flex flex-col w-full h-full items-center justify-center text-center`}
>
  <img
    src={pb}
    alt="kevin"
    class="rounded-1/2 w-10rem std-hover--scale std-hover--glow pressable cursor-pointer"
    tabindex="0"
  />
  <div class="mt-md">
    <h1 tabindex="0">Hey there, I am Kevin.</h1>
    <div tabindex="0" class="mt-sm">Building awesome things on the web is my passion.</div>
  </div>
</header>
