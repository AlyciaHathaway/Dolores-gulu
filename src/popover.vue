<template>
	<div class="popover" @click="onClick" ref="popover">
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
			positionContent() {
				// 父元素 overflow: hidden 时，popover会无法显示，所以把它放到 body 里
				document.body.appendChild(this.$refs.contentWrapper)
				let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
				this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
				this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
			},
			onClickDocument(event) {
				if (this.$refs.popover === event.target || this.$refs.popover.contains(event.target)) {
					return
				}
				if (this.$refs.contentWrapper === event.target || this.$refs.contentWrapper.contains(event.target)) {
					return
				}
				this.close()
			},
			open() {
				this.visible = true
				this.$nextTick(() => {
					this.positionContent()
					document.addEventListener('click', this.onClickDocument)
				})
			},
			close() {
				this.visible = false
				document.removeEventListener('click', this.onClickDocument)
			},
			onClick(event) {
				if (this.$refs.triggerWrapper.contains(event.target)) {
					if (this.visible === true) {
						this.close()
					}else {
						this.open()
					}
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