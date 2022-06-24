import {
	describe, it, vi 
} from 'vitest';
import {
	mount 
} from '@vue/test-utils';
import AccountHolder from '@/views/family-information/AccountHolderView.vue';
import {
	createTestingPinia 
} from '@pinia/testing';
import router from '@/router';

describe( 'Example unit test', () => {
	it( 'Can mount with Pinia and vue-router mocks', () => {
		mount( AccountHolder, {
			global: {
				plugins: [
					createTestingPinia( {
						createSpy: vi.fn,
					} ),
					router,
				],
			},
		} );
	} );
} )