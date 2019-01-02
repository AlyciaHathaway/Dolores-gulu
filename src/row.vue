<template>
	<div class="row" :style="rowStyle" :class="rowClass">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'GuluRow',
		props: {
			gutter: {
				type: [Number, String]
			},
			align: {
				type: String,
				validator(value) {
					return ['left', 'right', 'center'].includes(value)
				}
			}
		},
		computed: {
			rowStyle() {
				let {gutter} = this
				return {
					marginLeft: -gutter/2 + 'px',
					marginRight: -gutter/2 + 'px'
				}
			},
			rowClass() {
				let {align} = this
				return [align && `align-${align}`]
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
		flex-wrap: wrap;
		&.align-left {
			justify-content: flex-start;
		}
		&.align-right {
			justify-content: flex-end;
		}
		&.align-center {
			justify-content: center;
		}
	}
</style>