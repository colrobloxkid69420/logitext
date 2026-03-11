<script lang="ts">
  export let type: string = 'text';
  export let placeholder: string = '';
  export let value: string = '';
  export let label: string = '';
  export let error: string = '';

  let inputElement: HTMLInputElement;

  export function focus() {
    inputElement?.focus();
  }
</script>

<div class="w-full">
  {#if label}
    <label class="block text-sm font-medium text-neutral-700 mb-2">
      {label}
    </label>
  {/if}
  <input
    bind:this={inputElement}
    {type}
    {placeholder}
    bind:value
    class={`input-field ${error ? 'border-error focus:ring-error' : ''}`}
    on:change
    on:input
  />
  {#if error}
    <p class="text-sm text-error mt-1">{error}</p>
  {/if}
</div>
