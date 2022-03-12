<script>
  import Card from "@/components/Card.svelte"
  import Profile from "@/components/Profile.svelte"
  import Expandable from "@/components/Expandable.svelte"
  import Projects from "@/components/Projects.svelte"
  import Legal from "@/components/Legal.svelte"

  const gridLayout = "grid sm:grid-cols-2 grid-cols-1 gap-md w-full"
  const gridSpace = "mt-md"
</script>

<Profile classes="mb-lg" />

<section class={`${gridLayout} ${gridSpace}`}>
  <Card title="I have">
    <ul role="none">
      <li role="menuitem">8+ years professional experience</li>
      <li role="menuitem">12 completed projects</li>
      <li role="menuitem">Founded an internet startup</li>
      <li role="menuitem">A master's degree in computer science</li>
    </ul>
  </Card>
  <Card title="I offer">
    <ul role="none">
      <li role="menuitem">Remote & agile freelance work</li>
      <li role="menuitem">Web & mobile app development</li>
      <li role="menuitem">General IT consulting</li>
    </ul>
  </Card>
  <Card title="I like">
    <ul role="none">
      <li role="menuitem">Svelte, Vue, React</li>
      <li role="menuitem">JavaScript, Python</li>
      <li role="menuitem">vite, yarn, Sass, Tailwind/Windi</li>
      <li role="menuitem">GCloud, Firebase, Vercel</li>
      <li role="menuitem">macOS, Linux</li>
    </ul>
  </Card>
  <Card title="I am available">
    <ul role="none">
      <li role="menuitem">
        Vita on <a href="https://www.linkedin.com/in/kmschott/" target="_blank">LinkedIn </a>
      </li>
      <li role="menuitem">
        Projects on <a href="https://github.com/kevinXmichael/" target="_blank">GitHub</a>
      </li>
      <li role="menuitem">
        Email via <a href="mailto:kevin@kms695.de">kevin@kms695.de</a>
      </li>
    </ul>
  </Card>
</section>

<Expandable title="Projects" expandable classes="mt-md">
  <Projects classes={gridLayout} />
</Expandable>

<Expandable classes={gridSpace} title="Legal" expandable>
  <Legal />
</Expandable>

<div class="flex-grow my-md" />
<footer>{`© ${new Date().getFullYear()} Kevin Michael Schott`}</footer>
