<script setup lang="ts">
import { Input } from 'common-lib-vue';
import { useChildStore } from '@/stores/familyInformation/children';
import FormLayout from '@/layouts/FormLayout.vue';
import familyInfoRoutes from '@/router/family-information';
const formData = useChildStore();
</script>

<template>
	<FormLayout
		:routes=" familyInfoRoutes "
	>
		<main>
			<h2>
				Child Information
			</h2>
			<section
				class="child-section"
				v-for=" child  in  formData.children "
				:key="child.id"
			>
				<Input
					v-model="child.firstname"
					label="First Name"
				/>
				<Input
					v-model="child.lastname"
					label="Last Name"
				/>
				<button
					class="btn btn-danger"
					@click="formData.removeChild(child.id)"
				>
					Delete this child
				</button>
			</section>
			<button
				@click=" formData.addChild "
				class="btn btn-primary"
			>
				Add Child
			</button>
		</main>
	</FormLayout>
</template>

<style scoped>
main {
  margin-top: 1em;
  margin-bottom: 1em;
}

.child-section {
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
}

.child-section > .btn-danger {
  margin-top: 1em;
  width: 25%;
}

main > .btn-primary {
  margin-top: 1em;
  width: 25%;

}

</style>
