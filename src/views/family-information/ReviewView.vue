<script setup lang="ts">
import {
	useAccountHolderStore 
} from '@/stores/familyInformation/accountHolder';
import {
	useSpouseStore 
} from '@/stores/familyInformation/spouse';
import {
	useChildStore 
} from '@/stores/familyInformation/children';
import familyInfoRoutes from '@/router/family-information';
import ReviewTable from '@/components/ReviewTable.vue';
import FormLayout from '../../layouts/FormLayout.vue';
import {
	useRouter 
} from 'vue-router';

const accountHolderInformation = useAccountHolderStore();
const spouseInformation = useSpouseStore();
const childrenInformation = useChildStore();
const router = useRouter();
const accountHolderFields = Object.entries(accountHolderInformation.$state)
let spouseFields = Object.entries(spouseInformation.$state)
if (spouseInformation.hasSpouse === 'N') {
	spouseFields = spouseFields.filter(entry => entry[0] === 'hasSpouse')
}
const children = childrenInformation.$state.children;
const handleContinue = () => {
	accountHolderInformation.$reset();
	spouseInformation.$reset();
	childrenInformation.$reset();
	router.push('/');
}
</script>

<template>
	<FormLayout 
		:routes="familyInfoRoutes"
		:handleContinue="handleContinue"
	>
		<main>
			<h2>
				Account Holder Information
			</h2>
			<review-table :rows="accountHolderFields" />

			<h2>
				Spouse Information
			</h2>
			<review-table :rows="spouseFields"/>

			<h2>
				Child Information
			</h2>
			<review-table
				v-for="( child, index ) in children "
				:key=" child.id "
				:title="`Child #${index}`"
				:rows="Object.entries(child)"
			/>
		</main>
	</FormLayout>
</template>
