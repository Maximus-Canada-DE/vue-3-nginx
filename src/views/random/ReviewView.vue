<script setup lang="ts">
import {
	useRandomStore 
} from '@/stores/random';
import FormLayout from '@/layouts/FormLayout.vue';
import ReviewTable from '@/components/ReviewTable.vue';
import randomRoutes from '@/router/random';
import {
	useRouter 
} from 'vue-router';

const randomInformation = useRandomStore();
const randomFields = Object.entries(randomInformation.$state);
const router = useRouter();
const handleContinue = () => {
	randomInformation.$reset();
	router.push('/');
}

</script>

<template>
	<FormLayout 
		:routes="randomRoutes"
		:handleContinue="handleContinue"
	>
		<h2>
			Random Information
		</h2>
		<review-table :rows="randomFields" />
	</FormLayout>
</template>
