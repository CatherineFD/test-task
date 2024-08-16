<template>
	<button>
		{{ title }}
	</button>

</template>

<script>

export default {
	props: {
		title: {
			type: String,
			required: true
		}
	}
}
</script>

<style>
button {
			padding: 5px 10px;
			border: 1px solid #016285;
			border-radius: 8px;
			background-color: #0162853c;
			align-self: center;
			color: #003f56;
		}
</style>