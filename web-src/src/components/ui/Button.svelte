<script lang="ts">
  type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';
  type ButtonSize = 'sm' | 'md' | 'lg';

  export let variant: ButtonVariant = 'primary';
  export let size: ButtonSize = 'md';
  export let disabled = false;

  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-blue-600',
    secondary: 'bg-secondary text-white hover:bg-purple-600',
    outline: 'border-2 border-neutral-300 text-neutral-900 hover:border-neutral-400',
    danger: 'bg-error text-white hover:bg-red-600',
  };

  let className = '';
  $: className = `btn ${sizeClasses[size]} ${variantClasses[variant]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`;
</script>

<button {disabled} class={className} on:click>
  <slot />
</button>
