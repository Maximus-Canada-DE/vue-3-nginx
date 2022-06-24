<script setup lang="ts">
import {
	Input, DateInput, Radio
} from 'common-lib-vue';
import {
	useSpouseStore 
} from '@/stores/familyInformation/spouse';
import FormLayout from '@/layouts/FormLayout.vue';
import personalInfoRoutes from '@/router/family-information';
import useVuelidate from '@/validators/useVuelidate';
import ErrorMessage from '@/components/ErrorMessage.vue';
import {
	radioOptionsYesNo
} from '@/constants/forms';
import {
	beforeContinue
} from '@/utils/formHelpers';
 
const formData = useSpouseStore();
const v$ = useVuelidate(formData.vuelidations, formData);

</script>

<template>
	<FormLayout
		:routes="personalInfoRoutes"
		:beforeContinue="() => beforeContinue(v$)"
	>
		<main>
			<h2>
				Spouse Information
			</h2>

			<Radio
				id='has-spouse'
				name='has-spouse'
				label='Do you have a spouse or common-law partner?'
				v-model='formData.hasSpouse'
				:items='radioOptionsYesNo'
			/>

			<section v-if="formData.hasSpouse === 'Y'">
				<DateInput v-model="formData.birthdate"/>
				<ErrorMessage :errors="v$.birthdate.$errors" />
				
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
			</section>


		</main>
	</FormLayout>
</template>

<style scoped>
main>* {
  margin-top: 1em;margin-bottom: 1em;
}
</style>
