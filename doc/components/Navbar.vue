<template>
	<nav>
		<div @click="openSideMenu" class="menu-button u-align-middle _dp-f _dp-n-md">
			<img src="~assets/icon/bars.svg" alt="Menu" draggable="false" class="_h-24px">
		</div>
		<div class="lo-container navbar">
			<div class="navbar-container _jtfct-ct _jtfct-spbtw-md">
				<div class="_dp-f _alit-ct">
					<nuxt-link to="/" class="_dp-f _alit-ct">
						<img src="~assets/icon/turbine.svg" alt="fastwork" draggable="false" class="_h-32px _dp-n _dp-b-md">
						<div class="_fs-5 _fw-600 _cl-primary _mgl-12px" style="letter-spacing: -1px">
							Fastwork <span class="_fw-300">| engineer</span>
						</div>
					</nuxt-link>
				</div>
				<div class="_dp-n _dp-b-md">
					<ul class="_dp-f _alit-ct _lst-n _mg-0px _pd-0px">
						<li class="_mgl-32px"><a href="#" class="tb-link -primary _fw-600 _fs-5">Turbine UI</a></li>
						<li class="_mgl-32px"><a href="#" class="tb-link -primary _fw-600 _fs-5">Articles</a></li>
						<li class="_mgl-32px"><a href="#" class="tb-link -primary _fw-600 _fs-5">About us</a></li>
						<li class="_mgl-32px">
							<a href="https://github.com/fastworkco" target="_blank" rel="noopener noreferrer" class="tb-link -primary _fw-600 _fs-3">
								<svg class="_w-32px _h-32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div @click="closeSideMenu" :class="{ 'open': isSideMenuOpened }" class="side-menu">
			<div @click.stop="" class="side-menu-panel u-scrollbar _pd-24px">
				<div v-for="i in 100" :key="i">
					aaa {{ i }}
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	data () {
		return {
			isSideMenuOpened: false,
		}
	},

	methods: {
		openSideMenu () {
			this.isSideMenuOpened = true;
			document.body.classList.add('_ovfy-hd');
		},
		closeSideMenu () {
			document.body.classList.remove('_ovfy-hd');
			this.isSideMenuOpened = false;
		},
	},
}
</script>

<style lang="scss" scoped>
	$width-side-menu-panel: 240px;
	$color-panel: #0047a2;

	.menu-button {
		position: absolute;
		z-index: 2;

		left: 0;
		top: 0;

		width: $height-navbar;
		height: $height-navbar;

		cursor: pointer;

		&:hover {
			background: lighten($color-primary, 42%);
		}
	}

	.navbar {
		position: absolute;
		z-index: 1;

		top: 0;
		right: 0;

		width: 100%;
		height: $height-navbar;
	}

	.navbar-container {
		height: 100%;

		display: flex;
		align-items: center;
		justify-content: space-between;

		color: $color-dark;
	}

	.side-menu {
		position: fixed;
		z-index: 10;

		width: 100%;

		background-color: transparent;
		pointer-events: none;
		transition: all 0.16s ease;

		.side-menu-panel {
			overflow: auto;

			width: $width-side-menu-panel;
			height: 100vh;

			background-color: $color-panel;
			color: $color-white;

			transition: all 0.16s ease;
			transform: translate3d(-$width-side-menu-panel, 0, 0);
			pointer-events: all;
		}

		&.open {
			background-color: rgba(14, 17, 48, 0.219);
			pointer-events: all;

			.side-menu-panel {
				transform: translate3d(0, 0, 0);
			}
		}
	}

	.u-scrollbar::-webkit-scrollbar {
		opacity: 0;
		width: 8px;
		height: 4px;
		background-color: rgba(255, 255, 255, 0);
		transition: all 0.16s ease;
	}

	.u-scrollbar::-webkit-scrollbar-thumb {
		border-radius: 7px;
		padding: 0;
		background-color: rgba(255, 255, 255, 0.4);
		transition: all 0.16s ease;
	}
</style>
