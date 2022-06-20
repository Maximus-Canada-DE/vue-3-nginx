import { describe, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import AccountHolder from '@/views/family-information/AccountHolder.vue';
import { createTestingPinia } from '@pinia/testing';
import router from '@/router';

describe( 'Example unit test', () => {
  it( 'Can be configured to render with Pinia and vue-router mocks', () => {
    const wrapper = mount( AccountHolder, {
      global: {
        plugins: [
          createTestingPinia( {
            createSpy: vi.fn
          } ),
          router,
        ],
      },
    } );
  } );
} )