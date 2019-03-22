<template>
	<div class="popover" @click.stop="xxx">
		<div class="content-wrapper" ref="contentWrapper" v-if="visible">
			<slot name="content"></slot>
		</div>
		<span ref="triggerWrapper">
			<slot></slot>
		</span>
		
	</div>
</template>

<script>
	export default {
		name: "GuluPopover",
		data() {
			return {
				visible: false
			}
		},
		methods: {
			xxx() {
				this.visible = !this.visible
				if (this.visible === true) {
					this.$nextTick(() => {
						// 父元素 overflow: hidden 时，popover会无法显示，所以把它放到 body 里
						document.body.appendChild(this.$refs.contentWrapper)
						let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
						this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
						this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
						let eventHandler = ()=> {
							this.visible = false
							document.removeEventListener('click', eventHandler)
						}
						document.addEventListener('click', eventHandler)
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.popover {
		position: relative;
		display: inline-block;
		vertical-align: top;
	}
	
	.content-wrapper {
		position: absolute;
		transform: translateY(-100%);
		border: 1px solid red;
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
	}
</style>