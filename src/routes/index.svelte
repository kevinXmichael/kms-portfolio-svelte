<script lang="ts">
  import CardButton from "$lib/CardButton.svelte"
</script>

<header class="flex flex-col items-center justify-center w-full">
  <img
    src="favicon.png"
    alt="Kevin Michael Schott"
    id="profile-pic"
    width="100%"
    height="100%"
    class="rounded-xl w-full max-w-12rem pressable std-hover std-hover--scale"
    tabindex="0"
  />

  <div tabindex="0" class="flex flex-row items-center justify-center w-full mt-md">
    <h1 class="text-moving-color">Kevin</h1>
    &nbsp;
    <h1 class="text-moving-color-late">Michael</h1>
    &nbsp;
    <h1 class="text-moving-color-later">Schott</h1>
  </div>
  <div tabindex="0" class="text-center w-full mt-sm">Software Engineer & IT Consultant</div>

  <CardButton class="mt-lg" href="https://www.linkedin.com/in/kmschott/">
    <span class="link">LinkedIn</span>
  </CardButton>
  <CardButton class="mt-sm" href="https://github.com/kevinXmichael">
    <span class="link">GitHub</span>
  </CardButton>
  <CardButton class="mt-sm" href="mailto:hello@kms695.de">
    <span class="link">Email me</span>
  </CardButton>
  <CardButton class="mt-sm" href="/CV.pdf">
    <span class="link">Curriculum Vitae</span>
  </CardButton>
</header>

<section class="mt-lg">
  <h2 tabindex="0">Projects I am proud of</h2>
  <CardButton class="mt-md" href="https://www.rainprotocol.xyz/"><span class="link">Rain</span></CardButton>
  <CardButton class="mt-sm" href="https://nextnature.net/"><span class="link">Next Nature</span></CardButton>
  <CardButton class="mt-sm" href="https://myylink.de/"><span class="link">myylink</span></CardButton>
  <CardButton class="mt-sm" href="https://sellby.de/"><span class="link">sellby</span></CardButton>
</section>
