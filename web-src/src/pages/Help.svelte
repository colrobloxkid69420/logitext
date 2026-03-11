<script lang="ts">
  import Card from '$components/ui/Card.svelte';
</script>

<div class="p-8">
  <h1 class="section-title">Help & Documentation</h1>

  <div class="max-w-4xl">
    <Card title="Getting Started">
      <div class="space-y-4">
        <h3 class="font-semibold text-neutral-900">1. Creating Your First Proof</h3>
        <p class="text-neutral-700">
          Start by navigating to the Projects page and creating a new project. Then, open the proof editor to begin constructing your proof.
        </p>

        <h3 class="font-semibold text-neutral-900 mt-6">2. Using the Proof Editor</h3>
        <p class="text-neutral-700">
          The proof editor provides a visual representation of your proof tree. Use the available rules panel on the right to apply logical rules to your sequents.
        </p>

        <h3 class="font-semibold text-neutral-900 mt-6">3. Proof Rules</h3>
        <p class="text-neutral-700">
          Logitext supports standard Gentzen-style sequent calculus rules including axiom, cut, weakening, contraction, and logical connective rules.
        </p>
      </div>
    </Card>

    <Card title="Frequently Asked Questions">
      <div class="space-y-6">
        <div>
          <h4 class="font-semibold text-neutral-900 mb-2">What is sequent calculus?</h4>
          <p class="text-neutral-700 text-sm">
            Sequent calculus is a logical proof system developed by Gerhard Gentzen. It represents proofs as transformations of sequents.
          </p>
        </div>

        <div>
          <h4 class="font-semibold text-neutral-900 mb-2">How do I save my work?</h4>
          <p class="text-neutral-700 text-sm">
            Your work is automatically saved. You can also use the Save button in the editor to ensure your changes are persisted.
          </p>
        </div>

        <div>
          <h4 class="font-semibold text-neutral-900 mb-2">Can I export my proofs?</h4>
          <p class="text-neutral-700 text-sm">
            This feature is coming soon. You'll be able to export proofs in various formats for sharing and publication.
          </p>
        </div>
      </div>
    </Card>

    <Card title="Keyboard Shortcuts">
      <div class="space-y-2 text-sm">
        <div class="flex justify-between">
          <span class="font-mono text-neutral-600">Ctrl+S</span>
          <span class="text-neutral-700">Save</span>
        </div>
        <div class="flex justify-between">
          <span class="font-mono text-neutral-600">Ctrl+Z</span>
          <span class="text-neutral-700">Undo</span>
        </div>
        <div class="flex justify-between">
          <span class="font-mono text-neutral-600">Ctrl+Shift+Z</span>
          <span class="text-neutral-700">Redo</span>
        </div>
        <div class="flex justify-between">
          <span class="font-mono text-neutral-600">Esc</span>
          <span class="text-neutral-700">Close modal</span>
        </div>
      </div>
    </Card>
  </div>
</div>
