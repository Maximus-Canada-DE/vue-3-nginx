import { defineStore } from 'pinia';
import type { Child } from '@/types/Forms'

export const useChildStore = defineStore( {
  id: 'children',
  state: () => ( {
    children: [] as Child[],
  } ),
  actions: {
    removeChild(id?: number) {
      this.children = this.children.filter(child => child.id !== id);
    },
    addChild() {
      const children: Child[] = this.children;
      const ids = children.map(child => child.id);
      ids.sort();
      let newId;
      if (ids.length > 0) {
        const lastId = ids[ids.length - 1] as number;
        newId = lastId + 1;
      } else {
        newId = 1;
      }
      this.children = [ ...this.children, {
        firstname: "",
        lastname: "",
        id: newId,
      }]
    }
  }
} );