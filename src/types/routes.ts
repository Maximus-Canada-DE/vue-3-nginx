import type { Component } from 'vue';

export interface Route {
  title?: string;
  path: string;
  name: string;
  component: Component;
}
