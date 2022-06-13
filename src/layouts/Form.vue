<script setup lang="ts">
import "@bcgov/bootstrap-theme/dist/css/bootstrap-theme.min.css";
import 'common-lib-vue/dist/common-lib-vue.css';
import {
  PageStepper,
  ContinueBar,
} from 'common-lib-vue';
import type { RouteRecordRaw } from 'vue-router'
import MainLayout from '@/layouts/Main.vue';

defineProps<{
  routes: RouteRecordRaw[],
  handleContinue: Function,
  handleSecondary?: Function,
  hasSecondaryButton?: boolean,
  secondaryButtonLabel?: string,
  buttonLabel?: string,
  isSticky?: boolean,
  isSmoothScrollEnabled?: boolean,
  minStepLabelWidth?: boolean,
  isMobileStepperOpen?: boolean,
}>()

</script>

<template>
  <MainLayout>
    <template #main>
      <PageStepper :currentPath=" $router.currentRoute.value.path " :routes=" routes "
        :isSmoothScrollEnabled=" isSmoothScrollEnabled " :minStepLabelWidth=" minStepLabelWidth "
        :isMobileStepperOpen=" isMobileStepperOpen " />
      <slot></slot>
    </template>
    <template #footer>
      <ContinueBar v-slot:footer @continue=" handleContinue " :buttonLabel=" buttonLabel " @secondary=" handleSecondary "
        :isSticky=" isSticky " :hasSecondaryButton=" hasSecondaryButton " :secondaryButtonLabel=" secondaryButtonLabel ">
      </ContinueBar>
    </template>
  </MainLayout>
</template> 

<style>
</style>
