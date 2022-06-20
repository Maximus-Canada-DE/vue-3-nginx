<script setup lang="ts">
import { useAccountHolderStore } from '@/stores/familyInformation/accountHolder';
import { useSpouseStore } from '@/stores/familyInformation/spouse';
import { useChildStore } from '@/stores/familyInformation/children';
import MainLayout from '@/layouts/MainLayout.vue';
import {capitalize} from '@/utils/stringFormatters';
const accountHolderInformation = useAccountHolderStore();
const spouseInformation = useSpouseStore();
const childrenInformation = useChildStore();
const accountHolderFields = Object.entries(accountHolderInformation.$state)
const spouseFields = Object.entries(spouseInformation.$state)
const children = childrenInformation.$state.children
</script>

<template>
	<MainLayout>
		<template
			#main
		>
			<h2>
				Account Holder Information
			</h2>
			<table
				class="table table-bordered"
			>
				<tbody>
					<tr
						v-for="( [label, value], index ) in accountHolderFields "
						:key=" label + '-' + index "
					>
						<td>
							{{ capitalize(label) }}
						</td>
						<td>
							{{ value }}
						</td>
					</tr>
				</tbody>
			</table>

			<h2>
				Spouse Information
			</h2>
			<table
				class="table table-bordered"
			>
				<tbody>
					<tr
						v-for="( [label, value], index ) in spouseFields "
						:key=" label + '-' + index "
					>
						<td>
							{{ capitalize(label) }}
						</td>
						<td>
							{{ value }}
						</td>
					</tr>
				</tbody>
			</table>

			<h2>
				Child Information
			</h2>
			<table
				class="table table-bordered"
				v-for="( child ) in children "
				:key=" child.id "
			>
				<tbody>
					<tr
						v-for="( [label, value], index ) in Object.entries(child) "
						:key=" label + '-' + index "
					>
						<td
							v-if="label !== 'id'"
							class="col-sm-6"
						>
							{{ capitalize(label) }}
						</td>
						<td
							v-if="label !== 'id'"
							class="col-sm-6"
						>
							{{ value }}
						</td>
					</tr>
				</tbody>
			</table>
		</template>
	</MainLayout>
</template>
