<script setup lang="ts">
import {
	useChildStore 
} from '@/stores/familyInformation/children';
import FormLayout from '@/layouts/FormLayout.vue';
import familyInfoRoutes from '@/router/family-information';
import ChildForm from '@/components/ChildForm.vue'

const formData = useChildStore();
</script>

<template>
	<FormLayout :routes=" familyInfoRoutes ">	
		<div class="container">
			<h2>
				Child Information
			</h2>
			<ChildForm
				v-for=" child  in  formData.children "
				:key="child.id"
				:id="child.id"
			>
			</ChildForm>
			<button
				@click=" formData.addChild "
				class="btn btn-primary"
			>
				Add Child
			</button>
		</div>
	</FormLayout>
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

.container > .btn-primary {
  margin-top: 1em;
  width: 25%;

}

</style>
