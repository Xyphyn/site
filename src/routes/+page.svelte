<script lang="ts">
  import Project from '$lib/Project.svelte'
  import Kotlin from '$lib/logos/Kotlin.svelte'
  import Svelte from '$lib/logos/Svelte.svelte'
  import Typescript from '$lib/logos/Typescript.svelte'
</script>

<div class="flex flex-col gap-4">
  <div class="my-24 mx-auto flex flex-col gap-8">
    <h1
      class=" text-white z-10 text-5xl sm:text-7xl inline-flex items-center mx-auto"
    >
      <span
        class="leading-snug float-top bg-gradient-to-r from-pink-600 to-violet-600 bg- text-transparent bg-clip-text"
      >
        xylight
      </span>
      <span class="text-zinc-600">.dev</span>
    </h1>
    <p class="text-lg text-center text-zinc-400">making stupid stuff</p>
    <div class="flex flex-row gap-4 items-center justify-center">
      <Svelte width={32} alt="Svelte" />
      <Kotlin width={32} alt="Kotlin" />
      <Typescript width={32} alt="Typescript" />
    </div>
  </div>

  <section class="pt-4 flex flex-col gap-4">
    <h1 class="text-xl font-bold">Creations</h1>

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
