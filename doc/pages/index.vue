<template>
	<div>
		<section class="section-hero _pst-rlt">
			<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAPCAYAAAFvivQJAAAABGdBTUEAALGPC/xhBQAAABtJREFUOBFjYBgFoyEwGgKjITAaAqMhMIxDAAAG6QAB14aB/AAAAABJRU5ErkJggg==" alt="fastwork" class="_w-100pct _ptev-n _mgt-196px _mgt-0px-sm">
			<img src="~assets/images/bg.svg" alt="fastwork" class="_pst-asl _ojf-cv _bt-0px _l-0px _w-100pct _h-100pct _ptev-n">
			<div class="lo-container _pst-asl _t-0px _l-0px _r-0px">
				<h1 class="hero-heading">
					Build product <br> with confidence
				</h1>
			</div>
		</section>

		<section class="section-content lo-container _pdv-64px _bgcl-neutral-1">
			<div class="content-heading">
				<h2>Turbine UI</h2>
				<p class="_fs-5 _fw-500">CSS framework for build Fastwork products</p>
			</div>

			<div class="content-panel">
				.hello
			</div>
		</section>
	</div>
</template>

<style lang="scss" scoped>
	.section-hero {
		background: var(--color-text-white);
		font-family: var(--font-family-secodary);
		background-repeat: no-repeat;
		background-size: 100% auto;
		background-position: top rignt;

		+ * {
			position: relative;
			z-index: 1;
			margin-top: -1px;
		}
	}

	.section-content {
		background: #0a173a;

		.content-heading {
			text-align: center;
			color: var(--color-light);
		}

		.content-panel {
			margin-top: 2rem;
			padding: 1.5rem;
			border-radius: 6px;
			background: white;
		}
	}

	.hero-heading {
		text-align: center;
		margin-top: 1rem;
		font-size: 2.5rem;
		font-weight: 600;
		letter-spacing: -2px;

		@media (min-width: 768px) {
			font-size: 4rem;
		}

		@media (min-width: 1024px) {
			margin-top: 4rem;
			font-size: 4.5rem;
			text-align: left;
		}

		@media (min-width: 1280px) {
			margin-top: 8rem;
			font-size: 5.5rem;
		}
	}
</style>
