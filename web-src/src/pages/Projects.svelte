<script lang="ts">
  import Card from '$components/ui/Card.svelte';
  import Button from '$components/ui/Button.svelte';
</script>

<div class="p-8">
  <div class="flex justify-between items-center mb-6">
    <h1 class="section-title">Projects</h1>
    <Button variant="primary">New Project</Button>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card title="Project Template">
      <div class="space-y-3">
        <p class="text-sm text-neutral-600">
          This is a placeholder project card. Click to open or edit.
        </p>
        <div class="flex gap-2 pt-2">
          <Button variant="outline" size="sm">Open</Button>
          <Button variant="outline" size="sm">Delete</Button>
        </div>
      </div>
    </Card>

    <Card title="Empty State">
      <div class="text-center py-8">
        <svg class="w-12 h-12 mx-auto text-neutral-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
        <p class="text-neutral-500 text-sm">No projects yet</p>
      </div>
    </Card>
  </div>

  <div class="mt-8">
    <h2 class="text-xl font-semibold text-neutral-900 mb-4">Recent Proofs</h2>
    <div class="bg-white rounded-lg border border-neutral-200">
      <table class="w-full">
        <thead class="border-b border-neutral-200 bg-neutral-50">
          <tr>
            <th class="px-6 py-3 text-left text-sm font-semibold text-neutral-900">Name</th>
            <th class="px-6 py-3 text-left text-sm font-semibold text-neutral-900">Project</th>
            <th class="px-6 py-3 text-left text-sm font-semibold text-neutral-900">Status</th>
            <th class="px-6 py-3 text-right text-sm font-semibold text-neutral-900">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-neutral-200">
          <tr class="hover:bg-neutral-50 transition-colors">
            <td class="px-6 py-4 text-sm text-neutral-900">Proof Template</td>
            <td class="px-6 py-4 text-sm text-neutral-600">Sample</td>
            <td class="px-6 py-4 text-sm">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                In Progress
              </span>
            </td>
            <td class="px-6 py-4 text-sm text-right space-x-2">
              <Button variant="outline" size="sm">Edit</Button>
              <Button variant="outline" size="sm">Delete</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
