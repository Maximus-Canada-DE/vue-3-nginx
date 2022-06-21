<script setup lang="ts">
import { Input } from 'common-lib-vue';
import { useAccountHolderStore } from '@/stores/familyInformation/accountHolder';
import FormLayout from '@/layouts/FormLayout.vue';
import familyInfoRoutes from '@/router/family-information';
const formData = useAccountHolderStore();
</script>

<template>
	<FormLayout
		:routes="familyInfoRoutes"
		:isSticky="true"
		:isMobileStepperOpen="true"
	>
		<main>
			<h2>
				Account Holder Info
			</h2>
			<Input
				label="Hello"
				v-model="formData.firstname"
			/>
			<Input
				label="Hello"
				v-model="formData.lastname"
			/>
		</main>
	</FormLayout>
</template>
