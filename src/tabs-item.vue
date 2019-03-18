<template>
	<div class="tabs-item" @click="xxx" :class="classes">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'GuluTabsItem',
		inject: ['eventBus'],
		data() {
			return {
				active: false
			}
		},
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
		computed: {
			classes() {
				return {
					active: this.active
				}
			}
		},
		created() {
			// $on 监听一个事件
			this.eventBus.$on('update:selected', (name)=> {
				this.active = name === this.name
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

<style lang="scss" scoped>
	.tabs-item {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		height: 100%;
		padding: 0 1em;
		border: 1px solid green;
		cursor: pointer;
		&.active {
			background: red;
		}
	}
</style>