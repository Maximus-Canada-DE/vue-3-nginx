import {
	defineStore 
} from 'pinia';
import type {
	Child 
} from '@/types/Forms';
import {
	required 
} from '@/validators/validators';
import {
	getUniqueId
} from '@/utils/dataFormatters';

export const useChildStore = defineStore( {
	id: 'children',
	state: () => ( {
		children: [
			{
				firstname: '',
				lastname: '',
				id: 1,
			},
		] as Child[],
	} ),
	actions: {
		removeChild(id?: number) {
			this.children = this.children.filter(child => child.id !== id);
		},
		addChild() {
			const children: Child[] = this.children;
			const newId = getUniqueId(children);
			this.children = [
				...this.children,
				{
					firstname: '',
					lastname: '',
					id: newId,
				},
			]
		},
	},
	getters: {
		getChildById: (state) => {
			return (childId: number) => {
				const foundChild = state.children.find(child => child.id === childId) as Child;
				return foundChild;
			} 
		},
		vuelidations: () => ({
			firstname: {
				required,
			},
			lastname: {
				required,
			},
		}),
	},
} );