import Toast from './toast'


let currentToast

export default {
	install(Vue, options) {
		Vue.prototype.$toast = function(message, toastOptions) {
			if (currentToast) {
				currentToast.close()
			}
			currentToast = createToast({
				Vue,
				message,
				propsData: toastOptions,
				onClose: ()=> {
					currentToast = null
				}
			})
		}
	}
}

function createToast({Vue, message, propsData, onClose}) {
	let Constructor = Vue.extend(Toast)
	let toast = new Constructor({
		propsData
	})
	toast.$slots.default = [message]
	toast.$mount()
	// 在上一个触发销毁事件的时候，回调onClose currentToast = null
	toast.$on('close', onClose)
	document.body.appendChild(toast.$el)
	return toast
}