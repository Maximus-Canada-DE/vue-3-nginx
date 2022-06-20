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
      const ids = this.children.map(child => child.id);
      ids.sort();
      let newId;
      if (ids.length > 0) {
        newId = ids[ids.length - 1] + 1;
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