<script setup lang="ts">
import { Input, DateInput } from 'common-lib-vue'
import { useSpouseStore } from '@/stores/familyInformation/spouse';
import FormLayout from '@/layouts/Form.vue';
import personalInfoRoutes from '@/router/personalInfo';
const formData = useSpouseStore();
const handleContinue = () => console.log('continue')
</script>

<template>
  <FormLayout :routes=" personalInfoRoutes " :handleContinue="handleContinue">
    <main>
      <h2>Spouse Information</h2>
      <DateInput v-model=" formData.birthdate "></DateInput>
      <Input label="Hello" v-model=" formData.firstname " />
      <Input label="Hello" v-model=" formData.lastname " />

      <button>Log</button>
    </main>
  </FormLayout>
</template>

