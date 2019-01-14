<template>
	<div class="toast">
		<slot></slot>
		<div class="line"></div>
		<span class="close"
		      v-if="closeButton"
		      @click="onClickClose">
			{{closeButton.text}}
		</span>
	</div>
</template>

<script>
	// Vue.component('xxx', {'这里是 export default 返回的 options'})
	export default {
		name: 'GuluToast',
		props: {
			autoClose: {
				type: Boolean,
				default: true
			},
			autoCloseDelay: {
				type: Number,
				default: 2
			},
			closeButton: {
				type: Object,
				// 因为组件的 options 是浅拷贝，如果 default 的是对象，则是引用类型，一个地方修改，其它同一个组件的引用也会变化，需要写成函数每次组件创建都返回一个新的对象
				default() {
					return {
						text: '关闭',
						callback: undefined
					}
				}
			}
		},
		mounted() {
			if (this.autoClose) {
				setTimeout(()=> {
					this.close()
				}, this.autoCloseDelay * 1000)
			}
		},
		methods: {
			close() {
				this.$el.remove()
				this.$destroy()
			},
			log() {
				console.log('测试')
			},
			onClickClose() {
				this.close()
				if (this.closeButton && typeof this.closeButton.callback === 'function') {
					this.closeButton.callback(this)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	$font-size: 14px;
	$toast-height: 40px;
	$toast-bg: rgba(0, 0, 0, 0.75);
	.toast {
		position: fixed;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		height: $toast-height;
		padding: 0 16px;
		border-radius: 4px;
		box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
		font-size: $font-size;
		color: white;
		line-height: 1.8;
		background: $toast-bg;
		.line {
			height: 100%;
			margin-left: 16px;
			border-left: 1px solid #666;
		}
		.close {
			padding-left: 16px;
			cursor: pointer;
		}
	}
</style>