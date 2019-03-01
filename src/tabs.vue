<template>
	<div class="tabs">
		<slot></slot>
	</div>
</template>

<script>
	import Vue from 'vue'
	export default {
		name: 'GuluTabs',
		props: {
			selected: {
				type: String,
				required: true
			},
			direction: {
				type: String,
				default: 'horizontal',
				validator(value) {
					return ['horizontal', 'vertical'].indexOf(value) >= 0
				}
			}
		},
		data() {
			return {
				eventBus: new Vue()
			}
		},
		created() {
			// console.log(this)
			// this.$emit('update:selected', 'xxx')
		},
		provide() {
			return {
				eventBus: this.eventBus
			}
		}
	}
</script>

<style>
	.tabs {
	
	}
</style>