<template>
	<div>
		<navbar></navbar>
		<div class="page-container">
			<nuxt/>
		</div>
		<foot></foot>
	</div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Foot from '~/components/Foot.vue'

export default {
	components: {
		Navbar,
		Foot,
	},
}
</script>

<style lang="scss">
	.page-container {
		padding-top: $height-navbar;
	}
</style>

