<template>
	<div class="row" :style="{marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'GuluRow',
		props: {
			gutter: {
				type: [Number, String]
			}
		},
		created() {
			// 没有儿子
			// console.log(this.$children)
		},
		mounted() {
			// 有儿子
			this.$children.map((vm)=> {
				vm.gutter = this.gutter
			})
		}
	}
</script>

<style lang="scss" scoped>
	.row {
		display: flex;
	}
</style>