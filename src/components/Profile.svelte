<script>
  import Icon from "@/components/Icon.svelte"
  import { t } from "@/i18n"
  const aboutSecond = $t("general.about.second")
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
      <h1 tabindex="0">{$t("general.greeting")}</h1>
    </div>

    <section class="mt-lg text-justify">
      <br />
      <h1 tabindex="0">{$t("general.about.me")}</h1>
      <br />
      <p tabindex="0">{$t("general.about.first")}</p>
      <br />
      <p tabindex="0">{@html aboutSecond}</p>

      <br /><br /><br />
      <h1 tabindex="0">{$t("general.about.workWith")}</h1>
      <br />
      <div class="grid sm:grid-cols-5 grid-cols-3 gap-sm w-full">
        {#each ["macos", "linux", "brave", "vercel", "firebase", "heroku", "react", "nextjs", "svelte", "vite", "yarn", "sass", "vue", "stripe", "nodejs", "python", "shopify", "reddit", "youtube", "discord", "laravel", "alpine", "insomnia", "js", "ts"] as tech}
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
