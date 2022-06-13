import type { RouteRecordNormalized } from 'vue-router'
import type {Component} from 'vue';

export interface Route extends RouteRecordNormalized {
  title?: string;
  component: never;
}