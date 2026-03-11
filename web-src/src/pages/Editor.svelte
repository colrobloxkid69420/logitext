<script lang="ts">
  import Card from '$components/ui/Card.svelte';
  import Button from '$components/ui/Button.svelte';
</script>

<div class="flex h-full flex-col">
  <div class="bg-white border-b border-neutral-200 px-6 py-4">
    <h1 class="text-2xl font-bold text-neutral-900 mb-2">Proof Editor</h1>
    <div class="flex gap-2">
      <Button variant="primary" size="sm">Save</Button>
      <Button variant="outline" size="sm">Undo</Button>
      <Button variant="outline" size="sm">Redo</Button>
    </div>
  </div>

  <div class="flex flex-1 gap-4 p-6 overflow-hidden">
    <div class="flex-1 flex flex-col gap-4 min-w-0">
      <Card title="Proof Canvas">
        <div class="h-64 bg-neutral-100 rounded border-2 border-dashed border-neutral-300 flex items-center justify-center">
          <div class="text-center">
            <p class="text-neutral-600 font-medium">Proof visualization will appear here</p>
            <p class="text-sm text-neutral-500">Sequent calculus proof tree</p>
          </div>
        </div>
      </Card>

      <Card title="Proof Steps">
        <div class="space-y-2">
          <div class="h-12 bg-neutral-100 rounded animate-pulse"></div>
          <div class="h-12 bg-neutral-100 rounded animate-pulse"></div>
          <div class="h-12 bg-neutral-100 rounded animate-pulse"></div>
        </div>
      </Card>
    </div>

    <div class="w-80 flex flex-col gap-4 min-w-0">
      <Card title="Available Rules">
        <div class="space-y-2 max-h-96 overflow-y-auto">
          <div class="p-3 bg-neutral-100 rounded hover:bg-neutral-200 cursor-pointer transition-colors">
            <p class="font-medium text-sm">Axiom</p>
            <p class="text-xs text-neutral-600">ax</p>
          </div>
          <div class="p-3 bg-neutral-100 rounded hover:bg-neutral-200 cursor-pointer transition-colors">
            <p class="font-medium text-sm">Cut</p>
            <p class="text-xs text-neutral-600">cut</p>
          </div>
          <div class="p-3 bg-neutral-100 rounded hover:bg-neutral-200 cursor-pointer transition-colors">
            <p class="font-medium text-sm">Weakening (Left)</p>
            <p class="text-xs text-neutral-600">wl</p>
          </div>
          <div class="p-3 bg-neutral-100 rounded hover:bg-neutral-200 cursor-pointer transition-colors">
            <p class="font-medium text-sm">Weakening (Right)</p>
            <p class="text-xs text-neutral-600">wr</p>
          </div>
          <div class="p-3 bg-neutral-100 rounded hover:bg-neutral-200 cursor-pointer transition-colors">
            <p class="font-medium text-sm">Contraction (Left)</p>
            <p class="text-xs text-neutral-600">cl</p>
          </div>
          <div class="p-3 bg-neutral-100 rounded hover:bg-neutral-200 cursor-pointer transition-colors">
            <p class="font-medium text-sm">Contraction (Right)</p>
            <p class="text-xs text-neutral-600">cr</p>
          </div>
        </div>
      </Card>

      <Card title="Console">
        <div class="h-32 bg-neutral-900 rounded p-2 text-neutral-300 font-mono text-sm overflow-y-auto">
          <p>&gt; Ready</p>
        </div>
      </Card>
    </div>
  </div>
</div>
