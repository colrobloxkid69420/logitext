<script lang="ts">
  type AlertType = 'success' | 'warning' | 'error' | 'info';

  export let type: AlertType = 'info';
  export let message = '';

  const typeClasses = {
    success: 'bg-green-50 border-success text-success',
    warning: 'bg-yellow-50 border-warning text-warning',
    error: 'bg-red-50 border-error text-error',
    info: 'bg-blue-50 border-primary text-primary',
  };

  const iconPaths = {
    success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    warning: 'M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    error: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
    info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  };
</script>

<div class={`border-l-4 p-4 rounded flex gap-3 ${typeClasses[type]}`}>
  <svg class="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d={iconPaths[type]} clip-rule="evenodd" />
  </svg>
  <div class="flex-1">
    {#if message}
      <p>{message}</p>
    {/if}
    <slot />
  </div>
</div>
