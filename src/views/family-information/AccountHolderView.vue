<script setup lang="ts">
import {
	Input 
} from 'common-lib-vue';
import {
	useAccountHolderStore 
} from '@/stores/familyInformation/accountHolder';
import FormLayout from '@/layouts/FormLayout.vue';
import familyInfoRoutes from '@/router/family-information';
import useVuelidate from '@/validators/useVuelidate';
import ErrorMessage from '@/components/ErrorMessage.vue';

const formData = useAccountHolderStore();
const v$ = useVuelidate(formData.vuelidations, formData);

</script>

<template>
	<FormLayout :routes="familyInfoRoutes">
		<main>
			<h2>
				Account Holder Information
			</h2>
			<Input
				label="Hello"
				v-model="formData.firstname"
			/>
			<ErrorMessage :errors="v$.firstname.$errors" />

			<Input
				label="Hello"
				v-model="formData.lastname"
			/>
			<ErrorMessage :errors="v$.lastname.$errors" />

		</main>
	</FormLayout>
</template>
