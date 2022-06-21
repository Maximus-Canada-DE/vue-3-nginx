<script setup lang="ts">
import { Input, DateInput } from 'common-lib-vue';
import { useSpouseStore } from '@/stores/familyInformation/spouse';
import FormLayout from '@/layouts/FormLayout.vue';
import personalInfoRoutes from '@/router/family-information';
const formData = useSpouseStore();
</script>

<template>
	<FormLayout
		:routes="personalInfoRoutes"
	>
		<main>
			<h2>
				Spouse Information
			</h2>
			<DateInput
				v-model="formData.birthdate"
			/>
			<Input
				label="First Name"
				v-model="formData.firstname"
			/>
			<Input
				label="Last Name"
				v-model="formData.lastname"
			/>
		</main>
	</FormLayout>
</template>

<style scoped>
main>* {
  margin-top: 1em;margin-bottom: 1em;
}
</style>
