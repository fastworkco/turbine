<template>
	<div>
		<navbar></navbar>
		<div class="page-container">
			<nuxt/>
		</div>
	</div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
	components: {
		Navbar,
	},
}
</script>

<style lang="scss">
	.page-container {
		padding-top: $height-navbar;
	}
</style>

