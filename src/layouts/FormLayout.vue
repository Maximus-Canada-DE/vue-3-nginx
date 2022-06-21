<script setup lang="ts">
import '@bcgov/bootstrap-theme/dist/css/bootstrap-theme.min.css';
import 'common-lib-vue/dist/common-lib-vue.css';
import { PageStepper, ContinueBar } from 'common-lib-vue';
import MainLayout from '@/layouts/MainLayout.vue';
import type {Route} from '@/types/routes';
import { useRoute, useRouter } from 'vue-router';

export interface Props {
	routes: Route[];
	handleContinue?: () => void;
	handleSecondary?: () => void;
	hasSecondaryButton?: boolean;
	secondaryButtonLabel?: string;
	buttonLabel?: string;
	isSticky?: boolean;
	isSmoothScrollEnabled?: boolean;
	minStepLabelWidth?: number;
	isMobileStepperOpen?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	isSticky: true,
	isMobileStepperOpen: false,
	hasSecondaryButton: false,
});

const route = useRoute();
const router = useRouter();

const onContinue = () => {
	if (props.handleContinue) {
		props.handleContinue();
		return;
	} else {
		const currentRouteIndex = props.routes.findIndex(propRoute => propRoute.path === route.path || propRoute?.alias?.includes(route.path))
		const totalRoutes = props.routes.length;
		if (currentRouteIndex < totalRoutes) {
			const nextRouteIndex = currentRouteIndex + 1;
			router.push(props.routes[nextRouteIndex].path)
		}
	}
};
</script>

<template>
	<MainLayout>
		<template
			#main
		>
			<PageStepper
				:currentPath=" $router.currentRoute.value.path "
				:routes=" routes "
				:isSmoothScrollEnabled=" isSmoothScrollEnabled "
				:minStepLabelWidth=" minStepLabelWidth "
				:isMobileStepperOpen=" isMobileStepperOpen "
				@onClickLink="(path: string) => router.push(path)"
			/>
			<slot></slot>
		</template>
		<template
			#footer
		>
			<ContinueBar
				@continue=" onContinue "
				:buttonLabel=" buttonLabel "
				@secondary=" handleSecondary "
				:isSticky=" isSticky "
				:hasSecondaryButton=" hasSecondaryButton "
				:secondaryButtonLabel=" secondaryButtonLabel "
			>
			</ContinueBar>
		</template>
	</MainLayout>
</template>

<style>

</style>
