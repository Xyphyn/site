<script lang="ts">
  import { Canvas } from '@threlte/core'
  import '../style/app.css'
  import Background from './Background.svelte'
  import { browser } from '$app/environment'
  import { Button } from 'mono-svelte'
  import Github from '$lib/logos/Github.svelte'
</script>

<div class="absolute w-full h-full top-0 left-0 background-grid"></div>
{#if browser}
  <div class="fixed bg-black top-0 left-0 -z-10 w-full h-full">
    <Canvas>
      <Background />
    </Canvas>
  </div>
{/if}
<main
  class="min-h-screen h-full max-w-screen-xl mx-auto p-8 flex-col text-white"
>
  <slot />
</main>
<footer class="p-8 flex flex-row items-center">
  <div class="flex flex-row items-center gap-2 ml-auto">
    <Button href="https://github.com/Xyphyn" color="tertiary" size="square-lg">
      <Github class="fill-white" width={32} height={32} />
    </Button>
  </div>
</footer>

<style lang="postcss">
  .background-grid {
    background-size: 60px 60px;
    mask-image: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0)
    );
    background-image: linear-gradient(to right, #d933ff55 1px, transparent 1px),
      linear-gradient(to bottom, #d933ff55 1px, transparent 1px);
  }
</style>
