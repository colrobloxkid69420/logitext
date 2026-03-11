<script lang="ts">
  import Card from '$components/ui/Card.svelte';
  import Button from '$components/ui/Button.svelte';
</script>

<div class="p-8">
  <h1 class="section-title">Dashboard</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    <Card title="Recent Proofs">
      <div class="space-y-3">
        <div class="h-12 bg-neutral-200 rounded animate-pulse"></div>
        <div class="h-12 bg-neutral-200 rounded animate-pulse"></div>
        <div class="h-12 bg-neutral-200 rounded animate-pulse"></div>
      </div>
    </Card>

    <Card title="Quick Actions">
      <div class="space-y-2">
        <Button variant="primary" size="md" class="w-full">
          New Proof
        </Button>
        <Button variant="outline" size="md" class="w-full">
          Open Project
        </Button>
      </div>
    </Card>

    <Card title="Statistics">
      <div class="space-y-2">
        <div class="flex justify-between">
          <span class="text-neutral-600">Total Proofs:</span>
          <span class="font-semibold text-lg">0</span>
        </div>
        <div class="flex justify-between">
          <span class="text-neutral-600">Completed:</span>
          <span class="font-semibold text-lg">0</span>
        </div>
        <div class="flex justify-between">
          <span class="text-neutral-600">In Progress:</span>
          <span class="font-semibold text-lg">0</span>
        </div>
      </div>
    </Card>
  </div>

  <Card title="Getting Started">
    <p class="text-neutral-600 mb-4">
      Welcome to Logitext! Start creating your first proof by clicking the "New Proof" button above.
    </p>
    <div class="bg-neutral-100 rounded p-4">
      <p class="text-sm text-neutral-700">
        Logitext is a proof editor for Gentzen-style sequent calculus. Use the editor to construct formal proofs step by step.
      </p>
    </div>
  </Card>
</div>
