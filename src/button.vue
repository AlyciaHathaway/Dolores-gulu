<template>
	<!-- 模板里写东西不需要加 this -->
	<button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
		<g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
		<g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
		<div class="content">
			<slot></slot>
		</div>
	</button>
</template>

<script>
	import Icon from './icon'
	export default {
		name: 'GuluButton',
		// props: ['icon', 'iconPosition']
		components: {
			'g-icon': Icon
		},
		props: {
			icon: {},
			loading: {
				type: Boolean,
				default: false
			},
			iconPosition: {
				type: String,
				default: 'left',
				// 属性检查器，判断用户传值是否合法
				validator(value) {
					return value === 'left' || value === 'right'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.g-button {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		vertical-align: middle;
		font-size: var(--font-size);
		height: var(--button-height);
		/* 按钮不要写死宽度，用 padding 撑开 */
		padding: 0 1em;
		border-radius: var(--border-radius);
		border: 1px solid var(--border-color);
		background: var(--button-background);
		
		&:hover {
			border-color: var(--border-color-hover);
		}
		&:active {
			background: var(--button-active-bg);
		}
		&:focus {
			outline: none;
		}
		> .icon {
			order: 1;
			margin-right: .3em;
		}
		> .content {
			order: 2;
		}
		&.icon-right {
			> .icon {
				order: 2;
				margin-left: .3em;
				margin-right: 0;
			}
			> .content {
				order: 1;
			}
		}
		.loading {
			animation: spin 2s infinite linear;
		}
		
	}

</style>