<script lang="ts">
  import { onMount } from 'svelte';
  import Dashboard from '$pages/Dashboard.svelte';
  import Editor from '$pages/Editor.svelte';
  import Projects from '$pages/Projects.svelte';
  import Settings from '$pages/Settings.svelte';
  import Help from '$pages/Help.svelte';

  let currentPage = 'dashboard';

  onMount(() => {
    const path = window.location.hash.slice(1) || 'dashboard';
    currentPage = path;

    window.addEventListener('hashchange', () => {
      currentPage = window.location.hash.slice(1) || 'dashboard';
    });
  });

  function navigateTo(page: string) {
    window.location.hash = page;
    currentPage = page;
  }

  export function navigateToPage(page: string) {
    navigateTo(page);
  }
</script>

<div>
  {#if currentPage === 'dashboard'}
    <Dashboard />
  {:else if currentPage === 'editor'}
    <Editor />
  {:else if currentPage === 'projects'}
    <Projects />
  {:else if currentPage === 'settings'}
    <Settings />
  {:else if currentPage === 'help'}
    <Help />
  {:else}
    <Dashboard />
  {/if}
</div>
