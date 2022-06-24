<script setup lang="ts">
import {
	useRandomStore 
} from '@/stores/random';
import MainLayout from '@/layouts/MainLayout.vue';
import ReviewTable from '@/components/ReviewTable.vue';

const randomInformation = useRandomStore();
const randomFields = Object.entries(randomInformation.$state);

</script>

<template>
	<MainLayout>
		<template #main>
			<h2>
				Random Information
			</h2>
			<review-table :rows="randomFields" />
		</template>
	</MainLayout>
</template>
