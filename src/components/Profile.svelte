<script>
  import Card from "@/components/Card.svelte"
  import Icon from "@/components/Icon.svelte"
  import pb from "@/assets/profile-pic.png"
  export let classes
</script>

<header
  role="heading"
  aria-label="profile"
  class={`${classes} flex flex-col w-full h-full items-center justify-center text-center`}
>
  <img
    src={pb}
    alt="Kevin Michael Schott"
    width="100%"
    height="100%"
    class="rounded-1/2 w-10rem std-hover--scale std-hover--glow pressable cursor-pointer"
    tabindex="0"
  />
  <div class="my-md">
    <h1 tabindex="0">Hey there, I am Kevin.</h1>
    <!-- <p tabindex="0">Building awesome things on the web is my passion.</p> -->
    <div class="flex flex-row flex-nowrap justify-center mt-md">
      <a href="https://github.com/kevinXmichael" target="_blank">
        <Icon name="github" />
      </a>
      <a href="https://www.linkedin.com/in/kmschott" target="_blank" class="mx-lg">
        <Icon name="linkedin" />
      </a>
      <a href="mailto:kevin@kms695.de">
        <Icon name="email" />
      </a>
    </div>

    <section class="mt-lg text-left">
      <h1 tabindex="0">About me.</h1>
      <br />
      <p tabindex="0">
        Meanwhile I work more than 8 years in IT professionally. In my master's program I founding a
        successful internet startup, but also decided to go on a freelance journey.
      </p>
      <br />
      <p tabindex="0">
        My work is agile by nature and 100% remote. If offer not only Web & mobile app development,
        but also general IT consulting.
      </p>

      <br />
      <br />
      <h1 tabindex="0">What I work with.</h1>
      <br />
      <div class="grid sm:grid-cols-4 grid-cols-3 gap-sm w-full">
        {#each ["macos", "linux", "brave", "vercel", "firebase", "heroku", "react", "nextjs", "svelte", "vite", "yarn", "sass", "nodejs", "python", "shopify", "stripe", "discord", "reddit", "youtube", "twitter", "insomnia", "ts", "js", "gcloud"] as tech}
          <img
            tabindex="0"
            class="rounded-md pressable std-hover cursor-pointer"
            style="width: 100%; height: auto"
            src={`/src/assets/tech/${tech}.svg`}
            alt={tech}
          />
        {/each}
      </div>
    </section>
  </div>
</header>
