<script lang="ts">
  import Project from '$lib/Project.svelte'
</script>

<div class="flex flex-col gap-12">
  <div class="flex flex-col gap-2">
    <h1 class=" text-white z-10 text-5xl sm:text-7xl inline-flex items-center">
      <span class="leading-snug float-top">xylight</span>
      <span
        class="bg-gradient-to-r from-pink-600 to-violet-600 text-transparent bg-clip-text"
      >
        .dev
      </span>
    </h1>
    <div class="flex flex-row divide-x divided-pad-x divide-zinc-500">
      <span class="uppercase font-medium">UI design</span>
      <span class="uppercase font-medium">Svelte</span>
      <span class="uppercase font-medium">TypeScript</span>
      <span class="uppercase font-medium">Kotlin</span>
      <span class="uppercase font-medium">Linux</span>
    </div>
  </div>

  <section class="flex flex-col gap-4">
    <h1 class="text-xl font-bold">Projects</h1>

    <div
      class="grid md:grid-cols-6 grid-cols-1 grid-rows-2 gap-4 min-h-[48rem] w-full"
    >
      <Project
        class="md:col-span-4"
        title="Photon"
        image="/img/photon.webp"
        link="https://phtn.app"
        type="social"
      >
        <div slot="body" class="flex flex-col gap-2">
          <span>
            A cleanly designed web app for Lemmy. I decided to make it because
            the official lemmy-ui doesn't look great
          </span>
          <span>6.6K monthly users</span>
        </div>
      </Project>
      <Project
        class="md:col-span-2"
        title="Imagi"
        link="https://imagi.xylight.dev"
        type="social"
        image="/img/imagi.webp"
      >
        <div slot="body" class="flex flex-col gap-2">
          <span>A real time image sharing site I made with PocketBase</span>
          <span>like 1 monthly user</span>
        </div>
      </Project>
      <Project
        class="md:col-span-3"
        title="This Website"
        body="I decided to redesign my portfolio again. I used three.js for the stars in the background, and I always use SvelteKit for my web apps"
        link="https://xylight.dev"
        type="web"
      />
      <Project
        class="md:col-span-3"
        title="Mono UI"
        body="The design system I used for Photon"
        link="https://mono.phtn.app"
        type="web"
        image="/img/mono.webp"
      />
    </div>
  </section>
</div>

<style>
  .divided-pad-x > * {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .divided-pad-x > :first-child {
    padding-left: 0;
  }

  .divided-pad-x > :last-child {
    padding-right: 0;
  }
</style>
