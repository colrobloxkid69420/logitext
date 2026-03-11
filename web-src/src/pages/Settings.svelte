<script lang="ts">
  import Card from '$components/ui/Card.svelte';
  import Button from '$components/ui/Button.svelte';
  import Input from '$components/ui/Input.svelte';
</script>

<div class="p-8">
  <h1 class="section-title">Settings</h1>

  <div class="max-w-2xl space-y-6">
    <Card title="Account Settings">
      <div class="space-y-4">
        <Input label="Email" type="email" placeholder="your@email.com" />
        <Input label="Full Name" type="text" placeholder="Your Name" />
        <div class="pt-4 border-t border-neutral-200">
          <Button variant="primary">Save Changes</Button>
        </div>
      </div>
    </Card>

    <Card title="Editor Preferences">
      <div class="space-y-4">
        <div>
          <label class="flex items-center gap-2">
            <input type="checkbox" class="rounded" />
            <span class="text-neutral-700">Auto-save</span>
          </label>
        </div>
        <div>
          <label class="flex items-center gap-2">
            <input type="checkbox" class="rounded" checked />
            <span class="text-neutral-700">Show hints</span>
          </label>
        </div>
        <div>
          <label class="flex items-center gap-2">
            <input type="checkbox" class="rounded" checked />
            <span class="text-neutral-700">Dark mode</span>
          </label>
        </div>
      </div>
    </Card>

    <Card title="Danger Zone">
      <div class="space-y-4">
        <p class="text-sm text-neutral-600">
          These actions are irreversible. Please be careful.
        </p>
        <Button variant="danger">Delete Account</Button>
      </div>
    </Card>
  </div>
</div>
