<template>
	<transition name="slide">
		<div class="aside" v-if="visible">
			<slot></slot>
			<g-button @click="visible=false">close</g-button>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'GuluAside',
		data() {
			return {
				visible: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.aside {
		position: relative;
		> .g-button {
			position: absolute;
			top: 0;
			right: 0;
		}
	}
	.slide-enter-active, .slide-leave-active {
		transition: all .5s;
	}
	.slide-enter, .slide-leave-to {
		margin-left: -200px;
	}
</style>