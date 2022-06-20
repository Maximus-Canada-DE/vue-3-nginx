import type { Component } from 'vue';

export interface Route {
  title?: string;
  alias?: string[];
  path: string;
  name: string;
  component: Component;
}
