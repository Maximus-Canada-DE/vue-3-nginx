<script setup lang="ts">
import {
	Input, DateInput 
} from 'common-lib-vue';
import {
	useSpouseStore 
} from '@/stores/familyInformation/spouse';
import FormLayout from '@/layouts/FormLayout.vue';
import personalInfoRoutes from '@/router/family-information';
import useVuelidate from '@/validators/useVuelidate';
import ErrorMessage from '@/components/ErrorMessage.vue';
 
const formData = useSpouseStore();
const v$ = useVuelidate(formData.vuelidations, formData)

</script>

<template>
	<FormLayout :routes="personalInfoRoutes">
		<main>
			<h2>
				Spouse Information
			</h2>

			<DateInput v-model="formData.birthdate"/>
			
			<Input
				label="First Name"
				v-model="formData.firstname"
			/>
			<ErrorMessage :errors="v$.firstname.$errors" />

			<Input
				label="Last Name"
				v-model="formData.lastname"
			/>
			<ErrorMessage :errors="v$.lastname.$errors" />

		</main>
	</FormLayout>
</template>

<style scoped>
main>* {
  margin-top: 1em;margin-bottom: 1em;
}
</style>
