<script setup lang="ts">
import {
	capitalize
} from '@/utils/stringFormatters';

const props = defineProps<{
  rows: [string, string | number][];
	title?: string;
}>();

</script>

<template>
	<h3 v-if="props.title">
		{{props.title}}
	</h3>
	<table class="table table-bordered">
		<tbody>
			<tr
				v-for="( [label, value], index ) in props.rows "
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
