<template>
	<div class="toast">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'GuluToast'
	}
</script>

<style lang="scss" scoped>
	$font-size: 14px;
	$toast-height: 40px;
	$toast-bg: rgba(0, 0, 0, 0.75);
	.toast {
		position: fixed;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		height: $toast-height;
		padding: 0 16px;
		border-radius: 4px;
		box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
		font-size: $font-size;
		color: white;
		line-height: 1.8;
		background: $toast-bg;
	}
</style>