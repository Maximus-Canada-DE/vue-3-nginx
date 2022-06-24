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
import MainLayout from '@/layouts/MainLayout.vue';
import ReviewTable from '@/components/ReviewTable.vue';

const accountHolderInformation = useAccountHolderStore();
const spouseInformation = useSpouseStore();
const childrenInformation = useChildStore();
const accountHolderFields = Object.entries(accountHolderInformation.$state)
const spouseFields = Object.entries(spouseInformation.$state)
const children = childrenInformation.$state.children
</script>

<template>
	<MainLayout>
		<template #main>
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
		</template>
	</MainLayout>
</template>
