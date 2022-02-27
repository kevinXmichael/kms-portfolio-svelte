<script>
  import "@/css/app.scss"
  import boot from "@/lib/boot"
  import Profile from "@/components/Profile.svelte"
  import Heading from "@/components/Heading.svelte"
  import Legal from "@/components/Legal.svelte"
  boot()
</script>

<Profile />
<Heading classes="mt-md" title="have">
  <ul>
    <li>A master's degree in computer science</li>
    <li>Founded an internet startup</li>
    <li>8+ years professional experience</li>
    <li>12 completed projects</li>
  </ul>
</Heading>
<Heading classes="mt-md" title="offer">
  <ul>
    <li>Remote & agile freelance work</li>
    <li>Web & mobile app development</li>
    <li>General IT consulting</li>
  </ul>
</Heading>
<Heading classes="mt-md" title="love">
  <ul>
    <li>Svelte, Vue, React</li>
    <li>JavaScript, Python</li>
    <li>vite, yarn, Sass, Windi.css</li>
    <li>Google, Firebase, Vercel</li>
    <li>macOS, Linux, Brave, Firefox</li>
  </ul>
</Heading>
<Heading classes="mt-md" title="projects">hey du da</Heading>
<Heading classes="mt-md" title="contact">
  <ul>
    <li>You can find me on <a href="https://www.linkedin.com/in/kmschott/">LinkedIn </a></li>
    <li>Checkout my <a href="https://github.com/kevinXmichael/">GitHub</a> projects</li>
    <li>And also Email me: <a href="mailto:kevin@kms695.de">kevin@kms695.de</a></li>
  </ul>
</Heading>
<Heading classes="mt-md" title="legal" expandable>
  <Legal />
</Heading>
<div class="flex-grow my-md" />
<div>{`© ${new Date().getFullYear()} Kevin Michael Schott`}</div>
