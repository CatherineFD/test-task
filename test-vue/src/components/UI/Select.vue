<template>
	<label for="`${idSelect}`">{{ title }}</label>
	<select name="`${idSelect}`" id="`${idSelect}`" @change="changeSelect" v-model="selectedValue">
		<option :value="option.value" v-for="option in options">{{ option.name }}</option>
	</select>
</template>

<script>

export default {
	props: {
		title: {
			type: String,
			default: ''
		},
		idSelect: {
			type: String,
			required: true
		},
		options: {
			type: Array,
			default: [
				{name: '', value: ''}
			]
		}
	},
	emits: ['changeSelect'],
	data() {
		return {
			selectedValue:''
		}
	},
	methods: {
		changeSelect() {
			this.$emit('changeSelect', this.selectedValue);
		}
	}
}
</script>

<style scoped>
select {
	margin-top: 5px;
	margin-bottom: 10px;
	padding: 5px 10px;
	border: 1px solid #016285;
	border-radius: 8px;
}
</style>