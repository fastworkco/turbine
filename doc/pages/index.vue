<template>
	<div>
		<section class="section-hero _mgt-32px">
			<img src="~assets/images/bg.svg" alt="fastwork" class="_w-100pct _ptev-n">
			<div class="lo-container _pst-asl _t-0px _l-0px _r-0px">
				<div class="_mgt-128px _mgt-128px-sm _mgt-196px-lg _fs-1 _fs-hero-3-sm _fs-hero-1-lg _fw-600" style="letter-spacing: -2px">
					Build product <br> with confidence
				</div>
			</div>
		</section>

		<section class="lo-container _h-512px _bgcl-neutral-1 _cl-white">
			<h1>Hello</h1>
		</section>
	</div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
	components: {
		Navbar,
	},
};
</script>

<style lang="scss" scoped>

	.section-hero {
		font-family: $font-secondary;
		background: $color-white;
		font-family: $font-secondary;
		background-repeat: no-repeat;
		background-size: 100% auto;
		background-position: top rignt;
	}

	.bg {

	}
</style>
