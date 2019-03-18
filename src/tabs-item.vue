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
				this.eventBus.$emit('update:selected', this.name, this)
			}
		}
	}
</script>

<style lang="scss" scoped>
	$blue: #409eff;
	.tabs-item {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		height: 100%;
		padding: 0 1em;
		cursor: pointer;
		&.active {
			color: $blue;
			font-weight: bold;
		}
	}
</style>