<script>
  export let classes
</script>

<div class={`${classes} flex flex-col w-full h-full items-center justify-center text-center`}>
  <img
    src="img/profile-pic.jpg"
    alt="kevin"
    class="rounded-1/2 w-10rem std-hover--scale std-hover--glow pressable cursor-pointer"
  />
  <div class="mt-md">
    <h1>Hey there, I am Kevin.</h1>
    <div class="mt-sm">Building awesome things on the web is my passion.</div>
  </div>
</div>
