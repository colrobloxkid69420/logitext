<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function handleToggleSidebar() {
    dispatch('toggleSidebar');
  }
</script>

<header class="bg-white border-b border-neutral-200 shadow-sm">
  <div class="flex items-center justify-between h-16 px-6">
    <div class="flex items-center gap-4">
      <button
        on:click={handleToggleSidebar}
        class="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
        aria-label="Toggle sidebar"
      >
        <svg
          class="w-6 h-6 text-neutral-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <h1 class="text-2xl font-bold text-primary">Logitext</h1>
    </div>

    <div class="flex items-center gap-4">
      <button class="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
        <svg
          class="w-6 h-6 text-neutral-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </button>

      <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
        <span class="text-white font-bold text-sm">U</span>
      </div>
    </div>
  </div>
</header>
