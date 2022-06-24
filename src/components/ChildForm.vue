<script setup lang="ts">
import {
	Input 
} from 'common-lib-vue';
import {
	useChildStore 
} from '@/stores/familyInformation/children';
import useVuelidate from '@/validators/useVuelidate';
import ErrorMessage from '@/components/ErrorMessage.vue';
import type {
	Child
} from '@/types/Forms';

const props = defineProps<{
	id: number;
}>();

const childStore = useChildStore();
const child = childStore.getChildById(props.id) as Child;
const v$ = useVuelidate(childStore.vuelidations, child);

</script>

<template>
	<section class="child-section">

		<Input
			v-model="child.firstname"
			label="First Name"
		/>
		<ErrorMessage :errors="v$.firstname.$errors"/>
	
		<Input
			v-model="child.lastname"
			label="Last Name"
		/>
		<ErrorMessage :errors="v$.lastname.$errors"/>

		<button
			class="btn btn-danger"
			@click="childStore.removeChild(id)"
		>
			Delete this child
		</button>
	</section>
</template>

<style scoped>

.child-section {
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
}

.child-section > .btn-danger {
  margin-top: 1em;
  width: 25%;
}
</style>
