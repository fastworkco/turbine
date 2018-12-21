<template>
	<nav class="lo-container navbar">
		<div class="navbar-container">
			<nuxt-link to="/" class="_dp-f _alit-ct">
				<img src="~assets/icon/turbine-spinning.svg" alt="fastwork" draggable="false" class="_h-48px">
				<div class="_fs-4 _fw-600 _cl-secondary _mgl-12px" style="letter-spacing: -1px">
					fastwork <span class="_fw-300">| engineer</span>
				</div>
			</nuxt-link>
			<div>
				<ul class="_dp-f _alit-ct _lst-n _mg-0px _pd-0px">
					<li class="_mgl-32px"><a href="#" class="tb-link -primary _fw-600 _fs-5">Turbine UI</a></li>
					<li class="_mgl-32px"><a href="#" class="tb-link -primary _fw-600 _fs-5">Articles</a></li>
					<li class="_mgl-32px"><a href="#" class="tb-link -primary _fw-600 _fs-5">Team</a></li>
					<li class="_mgl-32px">
						<a href="#" class="tb-link -primary _fw-600 _fs-3">
							<i class="fab fa-github"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
	.navbar {
		position: absolute;
		z-index: 1;

		top: 0;
		right: 0;

		width: 100%;
		height: $height-navbar;
		// border-bottom: 1px solid $color-gray-200;
	}

	.navbar-container {
		height: 100%;

		display: flex;
		align-items: center;
		justify-content: space-between;

		color: $color-dark;
	}
</style>
