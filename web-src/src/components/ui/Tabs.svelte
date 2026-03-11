<script lang="ts">
  export let activeTab = 0;

  const tabs: { label: string; id: string }[] = [];

  export function registerTab(label: string, id: string) {
    tabs.push({ label, id });
  }
</script>

<div>
  <div class="flex border-b border-neutral-200">
    {#each tabs as tab, i}
      <button
        on:click={() => (activeTab = i)}
        class={`px-4 py-3 font-medium transition-colors border-b-2 ${
          activeTab === i
            ? 'border-primary text-primary'
            : 'border-transparent text-neutral-600 hover:text-neutral-900'
        }`}
      >
        {tab.label}
      </button>
    {/each}
  </div>
  <div class="pt-4">
    <slot />
  </div>
</div>
