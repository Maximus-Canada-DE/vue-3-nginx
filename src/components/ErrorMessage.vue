<script setup lang="ts">
import type {
	ErrorObject 
} from '@vuelidate/core';

const props = defineProps<{
  errors: ErrorObject[];
}>();
</script>

<template>
	<p
		class="text-danger"
		v-if="props.errors.length"
	>
		{{ props.errors[0].$message }}  
	</p>
</template>