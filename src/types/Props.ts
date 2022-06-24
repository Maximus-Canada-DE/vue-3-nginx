import type {
	RouteRecordRaw 
} from 'vue-router';

export interface Props {
	routes: RouteRecordRaw[];
	handleContinue: () => void;
	handleSecondary?: () => void;
	hasSecondaryButton?: boolean;
	secondaryButtonLabel?: string;
	buttonLabel?: string;
	isSticky?: boolean;
	isSmoothScrollEnabled?: boolean;
	minStepLabelWidth?: boolean;
	isMobileStepperOpen?: boolean;
}