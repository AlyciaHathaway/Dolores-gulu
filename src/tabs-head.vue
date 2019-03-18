<template>
	<div class="tabs-head">
		<slot></slot>
		<div class="line" ref="line"></div>
		<div class="actions-wrapper">
			<slot name="actions"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GuluTabsHead',
		inject: ['eventBus'],
		created() {
			this.eventBus.$on('update:selected', (item, vm)=> {
				console.log(item, vm)
			})
		}
	}
</script>

<style lang="scss" scoped>
	$tab-height: 40px;
	$blue: #409eff;
	.tabs-head {
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: $tab-height;
		> .line {
			position: absolute;
			bottom: 0;
			width: 4em;
			border-bottom: 1px solid $blue;
		}
		> .actions-wrapper {
			margin-left: auto;
		}
	}
</style>