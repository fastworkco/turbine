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

<style>
	:root {
		--height-navbar: 5rem;
	}

	.page-container {
		padding-top: var(--height-navbar);
	}
</style>

