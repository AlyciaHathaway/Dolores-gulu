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
				// 如果一个对象能够 $emit触发一个事件、$on监听一个事件、$off取消监听一个事件，它就是一个 eventBus 事件中心
				// 借助 new Vue() 的接口，它的行为完全符合事件中心
				eventBus: this.eventBus
			}
		}
	}
</script>

<style>
	.tabs {
	
	}
</style>