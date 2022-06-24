<script setup lang="ts">
import {
	useRandomStore 
} from '@/stores/random';
import FormLayout from '@/layouts/FormLayout.vue';
import randomRoutes from '@/router/random';
import useVuelidate from '@vuelidate/core';
import {
	beforeContinue 
} from '@/utils/formHelpers';
import {
	Input, TimeInput
} from 'common-lib-vue';
import ErrorMessage from '@/components/ErrorMessage.vue';

const formData = useRandomStore();
const v$ = useVuelidate(formData.vuelidations, formData);

</script>

<template>
	<FormLayout
		:routes=" randomRoutes "
		:beforeContinue="() => beforeContinue(v$)"
	>	

		<TimeInput
			v-model="formData.time"
			label="What time is it?"
		/>
		<ErrorMessage :errors="v$.time.$errors" />

		<Input 
			v-model="formData.favouriteColour"
			label="What is your favourite colour?"
		/>
		<ErrorMessage :errors="v$.favouriteColour.$errors" />
		
	</FormLayout>
</template>

<style scoped>
</style>
