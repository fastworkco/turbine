<template>
	<div>
		<section class="section-hero _pst-rlt">
			<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAECAYAAAE1wRXrAAAABGdBTUEAALGPC/xhBQAAAAxJREFUCB1jYBgYAAAAeAABmevWowAAAABJRU5ErkJggg==" alt="fastwork" class="_w-100pct _ptev-n">
			<img src="~assets/images/bg.svg" alt="fastwork" class="_pst-asl _t-0px _l-0px _w-100pct _h-100pct _ptev-n">
			<div class="lo-container _pst-asl _t-0px _l-0px _r-0px">
				<h1 class="_mgt-48px _mgt-64px-sm _mgt-128px-lg _fs-1 _fs-hero-3-sm _fs-hero-1-lg _fw-600" style="letter-spacing: -2px">
					Build product <br> with confidence
				</h1>
			</div>
		</section>

		<section class="section-content lo-container _pdv-96px _bgcl-neutral-1">
			<div class="_cl-white _tal-ct">
				<h2 class="_fs-hero-3">Turbine UI</h2>
				<p class="_fs-5 _fw-500">CSS framework to build and style Fastwork products</p>
			</div>

			<div class="lo-content-grid _mgt-48px">
				<a href="#">
					<div class="u-align-middle _w-100pct _h-100pct _bgcl-white _bdrd-4px _fs-4 _fw-600">Getting Start</div>
				</a>
				<a href="#">
					<div class="u-align-middle _w-100pct _h-100pct _bgcl-white _bdrd-4px _fs-4 _fw-600">About Turbine UI</div>
				</a>
				<a href="#">
					<div class="u-align-middle _w-100pct _h-100pct _bgcl-white _bdrd-4px _fs-4 _fw-600">Design Tokens</div>
				</a>
				<a href="#">
					<div class="u-align-middle _w-100pct _h-100pct _bgcl-white _bdrd-4px _fs-4 _fw-600">CSS Components</div>
				</a>
				<a href="#">
					<div class="u-align-middle _w-100pct _h-100pct _bgcl-white _bdrd-4px _fs-4 _fw-600">Assets</div>
				</a>
				<a href="#">
					<div class="u-align-middle _w-100pct _h-100pct _bgcl-white _bdrd-4px _fs-4 _fw-600">Press Kit</div>
				</a>
			</div>
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

		+ * {
			position: relative;
			z-index: 1;
			margin-top: -1px;
		}
	}

	.lo-content-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: 140px;
		grid-gap: 12px;

		>*:nth-child(3n + 1) {
			grid-column-end: span 2;
			grid-row-end: span 2;
		}
	}

	@media (min-width: $md) {
		.lo-content-grid {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-auto-rows: 180px;
			grid-gap: 24px;
		}
	}
</style>
