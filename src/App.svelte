<script>
  import "@/assets/css/app.scss";
  import boot from "@/lib/boot";
  import Legal from "@/components/Legal.svelte";
  boot();
</script>

<h1>Hallo!</h1>
<Legal />
<div class="flex-grow my-md" />
<div>{`© ${new Date().getFullYear()} Kevin Michael Schott`}</div>
