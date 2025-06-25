<template>
    <div>
        <h2 class="text-2xl mb-4">Notifications</h2>
        <form class="space-y-4 mx-auto">
            <div class="flex items-center gap-2">
                <input id="email-notifications" type="checkbox" v-model="notifications.email"
                    class="mt-0 flex-shrink-0" />
                <label for="email-notifications" class="block">Email notifications</label>
            </div>
            <div class="flex items-center gap-2">
                <input id="sms-notifications" type="checkbox" v-model="notifications.sms" class="mt-0 flex-shrink-0" />
                <label for="sms-notifications" class="block">SMS notifications</label>
            </div>
            <button type="submit" class="btn-primary">Save</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { useSettings } from '@/composables/useSettings';
const { notifications } = useSettings();
</script>