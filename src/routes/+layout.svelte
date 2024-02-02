<script lang="ts">
  export const prerender = true

  import { Canvas } from '@threlte/core'
  import '../style/app.css'
  import Background from './Background.svelte'
  import { browser } from '$app/environment'
</script>

{#if browser}
  <div class="fixed bg-black top-0 left-0 -z-10 w-full h-full">
    <Canvas>
      <Background />
    </Canvas>
  </div>
{/if}
<main class="min-h-screen h-full w-full p-8 flex-col text-white">
  <slot />
</main>
