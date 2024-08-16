<template>
	<div class="container">
		<Form></Form>

	</div>
</template>

<script>
import Form from './components/Form.vue';

export default {
	components: {
		Form
	}
}
</script>

<style scoped>
* {
	font-family: 'Ubuntu', 'Arial Narrow', Arial, sans-serif;
	color: #003f56;
}

.container {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100vh;
			background-color: #01628524;
			margin: 0;
			padding: 0;
		}
</style>
