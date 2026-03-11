<script lang="ts">
  import './styles.css';
  import Header from '$components/layout/Header.svelte';
  import Sidebar from '$components/layout/Sidebar.svelte';
  import Footer from '$components/layout/Footer.svelte';
  import Router from '$components/Router.svelte';

  let sidebarOpen = true;

  function toggleSidebar() {
    sidebarOpen = !sidebarOpen;
  }
</script>

<div class="flex h-screen flex-col bg-neutral-50">
  <Header on:toggleSidebar={toggleSidebar} />

  <div class="flex flex-1 overflow-hidden">
    <Sidebar open={sidebarOpen} />

    <main class="flex-1 overflow-auto bg-neutral-50">
      <Router />
    </main>
  </div>

  <Footer />
</div>
