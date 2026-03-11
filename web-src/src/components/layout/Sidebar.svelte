<script lang="ts">
  export let open = true;

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'home' },
    { id: 'editor', label: 'Editor', icon: 'edit' },
    { id: 'projects', label: 'Projects', icon: 'folder' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
    { id: 'help', label: 'Help', icon: 'help' },
  ];

  function navigateTo(page: string) {
    window.location.hash = page;
  }

  function getIcon(icon: string) {
    const icons: Record<string, string> = {
      home: 'M3 12a9 9 0 0118 0 9 9 0 01-18 0z',
      edit: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
      folder: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
      settings: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M12 15a3 3 0 100-6 3 3 0 000 6z',
      help: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    };
    return icons[icon] || '';
  }
</script>

<aside
  class={`bg-white border-r border-neutral-200 transition-all duration-300 overflow-hidden flex flex-col ${
    open ? 'w-64' : 'w-0'
  }`}
>
  <nav class="flex-1 px-4 py-6 space-y-2">
    {#each navItems as item (item.id)}
      <button
        on:click={() => navigateTo(item.id)}
        class="w-full flex items-center gap-3 px-4 py-3 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors text-left font-medium"
      >
        <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={getIcon(item.icon)} />
        </svg>
        <span>{item.label}</span>
      </button>
    {/each}
  </nav>

  <div class="border-t border-neutral-200 p-4">
    <button class="w-full btn btn-outline text-sm">
      Sign Out
    </button>
  </div>
</aside>
