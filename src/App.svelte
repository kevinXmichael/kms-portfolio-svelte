<script>
  import "@/css/app.scss"
  import boot from "@/lib/boot"
  import Profile from "@/components/Profile.svelte"
  import Expandable from "@/components/Expandable.svelte"
  import Projects from "@/components/Projects.svelte"
  import Legal from "@/components/Legal.svelte"
  boot()

  const gridLayout = "grid sm:grid-cols-2 grid-cols-1 gap-md w-full"
  const gridSpace = "mt-md"
</script>

<Profile />
<div class={`${gridLayout} mt-lg`}>
  <Expandable title="have">
    <ul>
      <li>A master's degree in computer science</li>
      <li>Founded an internet startup</li>
      <li>8+ years professional experience</li>
      <li>12 completed projects</li>
    </ul>
  </Expandable>
  <Expandable title="offer">
    <ul>
      <li>Remote & agile freelance work</li>
      <li>Web & mobile app development</li>
      <li>General IT consulting</li>
    </ul>
  </Expandable>
</div>
<Expandable classes={gridSpace} title="projects" expandable expanded>
  <Projects classes={gridLayout} />
</Expandable>
<div class={gridLayout}>
  <Expandable classes={gridSpace} title="love">
    <ul>
      <li>Svelte, Vue, React</li>
      <li>JavaScript, Python</li>
      <li>vite, yarn, Sass, Windi.css</li>
      <li>Google, Firebase, Vercel</li>
      <li>macOS, Linux, Brave, Firefox</li>
    </ul>
  </Expandable>
  <Expandable title="contact">
    <ul>
      <li>You can find me on <a href="https://www.linkedin.com/in/kmschott/">LinkedIn </a></li>
      <li>Checkout my <a href="https://github.com/kevinXmichael/">GitHub</a> projects</li>
      <li>And also Email me: <a href="mailto:kevin@kms695.de">kevin@kms695.de</a></li>
    </ul>
  </Expandable>
</div>
<Expandable classes={gridSpace} title="legal" expandable>
  <Legal />
</Expandable>
<div class="flex-grow my-md" />
<div class="hover:text-pink">{`© ${new Date().getFullYear()} Kevin Michael Schott`}</div>
