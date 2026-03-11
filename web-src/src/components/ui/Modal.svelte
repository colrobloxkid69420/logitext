<script lang="ts">
  export let open = false;
  export let title = '';

  function handleBackdropClick() {
    open = false;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      open = false;
    }
  }
</script>

{#if open}
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    on:click={handleBackdropClick}
    role="presentation"
  >
    <div
      class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"
      on:click={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
    >
      <div class="flex items-center justify-between p-6 border-b border-neutral-200">
        <h2 class="text-xl font-semibold text-neutral-900">{title}</h2>
        <button
          on:click={() => (open = false)}
          class="text-neutral-400 hover:text-neutral-600 transition-colors"
          aria-label="Close modal"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="p-6">
        <slot />
      </div>
    </div>
  </div>
{/svelte:window}

<svelte:window on:keydown={handleKeydown} />
