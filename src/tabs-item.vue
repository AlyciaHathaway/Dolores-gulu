<template>
	<div class="tabs-item" @click="xxx">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'GuluTabsItem',
		inject: ['eventBus'],
		props: {
			disabled: {
				type: Boolean,
				default: false
			},
			name: {
				type: String|Number,
				required: true
			}
		},
		created() {
			// $on 监听一个事件
			this.eventBus.$on('update:selected', (name)=> {
				console.log(name)
			})
		},
		methods: {
			xxx() {
				// $emit 触发一个事件
				this.eventBus.$emit('update:selected', this.name)
			}
		}
	}
</script>

<style>
	.tabs-item {
	
	}
</style>