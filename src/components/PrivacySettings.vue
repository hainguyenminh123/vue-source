<template>
    <div>Add commentMore actions
        <h2 class="text-2xl mb-4">Privacy</h2>
        <form class="space-y-4 mx-auto">
            <div class="flex items-center gap-2">
                <input id="search-engine-indexing" type="checkbox" v-model="privacy.searchEngineIndexing" />
                <label for="search-engine-indexing">Search engine indexing</label>
            </div>
            <div>
                <label class="mb-1">Visibility</label>
                <select v-model="privacy.visibility">
                    <option value="private">Private</option>
                    <option value="public">Public</option>
                </select>
            </div>
            <button type="submit" class="btn-primary">Save</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { useSettings } from '@/composables/useSettings';
const { privacy } = useSettings();
</script>