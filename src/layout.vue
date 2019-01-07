<template>
	<div class="layout" :class="layoutClass">
		<slot></slot>
	</div>
	
</template>

<script>
	export default {
		name: 'GuluLayout',
		data() {
			return {
				layoutClass: {
					hasAside: false
				}
			}
		},
		mounted() {
			this.$children.map((vm)=> {
				if (vm.$options.name === 'GuluAside') {
					this.layoutClass.hasAside = true
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	.layout {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		border: 1px solid red;
		&.hasAside {
			flex-direction: row;
		}
	}
</style>