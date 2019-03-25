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
		mounted() {
			this.checkChildren()
			this.selectTab()
		},
		provide() {
			return {
				// 如果一个对象能够 $emit触发一个事件、$on监听一个事件、$off取消监听一个事件，它就是一个 eventBus 事件中心
				// 借助 new Vue() 的接口，它的行为完全符合事件中心
				eventBus: this.eventBus
			}
		},
		methods: {
			checkChildren() {
				// $children 只能获取到子组件，不能获取到子元素
				if (this.$children.length === 0) {
					console && console.warn &&
					console.warn('tabs 的子组件应该是 tabs-head 和 tabs-body, 但你没有写子组件')
				}
			},
			selectTab() {
				this.$children.map((vm)=> {
					if (vm.$options.name === 'GuluTabsHead') {
						vm.$children.map((childVM)=> {
							if (childVM.$options.name === 'GuluTabsItem' && childVM.name === this.selected) {
								this.eventBus.$emit('update:selected', this.selected, childVM)
							}
						})
					}
				})
			}
		}
	}
</script>

<style>
	.tabs {
	
	}
</style>