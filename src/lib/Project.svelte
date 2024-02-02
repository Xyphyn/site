<script lang="ts">
  import {
    Icon,
    Link,
    type IconSource,
    AtSymbol,
    Cube,
    GlobeAlt,
    Calculator,
  } from 'svelte-hero-icons'

  export let title: string | undefined = undefined
  export let body: string | undefined = undefined
  export let image: string | undefined = undefined
  export let link: string | undefined = undefined
  export let type: 'social' | 'web' | 'utility' | 'other'

  function typeToData(type: 'social' | 'web' | 'utility' | 'other'): {
    icon: IconSource
    name: string
  } {
    switch (type) {
      case 'social': {
        return {
          icon: AtSymbol,
          name: 'Social',
        }
      }
      case 'web': {
        return {
          icon: GlobeAlt,
          name: 'Web',
        }
      }
      case 'utility': {
        return {
          icon: Calculator,
          name: 'Utility',
        }
      }
    }

    return {
      icon: Cube,
      name: 'Other',
    }
  }

  $: typeData = typeToData(type)
</script>

<div
  class="z-10 cursor-pointer group flex flex-col gap-2 relative bg-zinc-900/80 backdrop-blur-sm
   p-6 rounded-2xl border border-zinc-700 {$$props.class} overflow-hidden"
>
  <div
    class="absolute scale-95 group-hover:scale-100 transition-all -inset-4 -z-10 opacity-0
     group-hover:opacity-100 rounded-md"
  />
  <div class="w-3/4 h-full flex flex-col gap-2">
    <span class="text-2xl font-medium">
      {#if title}
        {title}
      {:else}
        <slot name="title" />
      {/if}
    </span>
    <span class="text-zinc-200">
      {#if body}
        {body}
      {:else}
        <slot name="body" />
      {/if}
    </span>
    {#if image}
      <img
        src={image}
        class="w-3/4 h-full object-cover absolute -z-10 bottom-0 right-0 background-image object-right"
        alt="useless background"
      />
    {/if}
  </div>
  <div class="flex flex-row items-end justify-between mt-auto">
    {#if link}
      <span class="text-sm flex flex-row items-center gap-1">
        <Icon src={Link} size="16" mini />
        {new URL(link).hostname}
      </span>
    {/if}
    <div
      class="border border-zinc-700 bg-zinc-900 rounded-full box-border p-1.5"
    >
      <Icon src={typeData.icon} mini size="16" />
    </div>
  </div>
</div>

<style>
  .background-image {
    mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
</style>
