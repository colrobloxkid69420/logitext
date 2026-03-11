<script lang="ts">
  export let title = '';
</script>

<div class="card">
  {#if title}
    <h3 class="text-lg font-semibold text-neutral-900 mb-4">{title}</h3>
  {/if}
  <slot />
</div>
