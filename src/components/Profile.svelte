<script>
  import Icon from "@/components/Icon.svelte"
</script>

<header
  role="heading"
  aria-label="profile"
  class="flex flex-col w-full h-full items-center justify-center text-center"
>
  <section>
    <img
      src="favicon.png"
      alt="Kevin Michael Schott"
      width="100%"
      height="100%"
      class="rounded-1/2 w-10rem pressable std-hover--glow std-hover--scale cursor-pointer"
      tabindex="0"
    />
    <div class="my-md">
      <div class="flex flex-row flex-nowrap justify-center mb-md">
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
      <h1 tabindex="0">Hey there, I am Kevin.</h1>
    </div>

    <section class="mt-lg text-left">
      <br />
      <h1 tabindex="0">About me.</h1>
      <br />
      <p tabindex="0">
        Meanwhile I work for more than 8 years in IT. In my master's program I founded a successful
        internet startup and also decided to go on a freelance journey.
      </p>
      <br />
      <p tabindex="0">
        My work is agile by nature and 100% remote. I offer web & mobile app development as well as
        IT consulting.
      </p>

      <br /><br /><br />
      <h1 tabindex="0">What I work with.</h1>
      <br />
      <div class="grid sm:grid-cols-5 grid-cols-3 gap-sm w-full">
        {#each ["macos", "linux", "brave", "vercel", "firebase", "heroku", "react", "nextjs", "svelte", "vite", "yarn", "sass", "nodejs", "python", "shopify", "stripe", "discord", "reddit", "youtube", "twitter", "insomnia", "ts", "js", "gcloud"] as tech}
          <img
            tabindex="0"
            class="rounded-md pressable std-hover std-hover--scale cursor-pointer"
            style="width: 100%; height: auto"
            src={`tech/${tech}.svg`}
            alt={tech}
          />
        {/each}
      </div>
    </section>
  </section>
</header>
