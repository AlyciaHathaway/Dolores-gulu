const expect = chai.expect
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

// describe 和 it 是由 mocha 提供挂在 window 上的全局函数
// sinon-chai 同时引入 sinon 和 chai
// sinon.fake 是由 sinon 提供
// expect 是由 chai 提供
// calledWith 是由 sinon-chai 提供
// dispatchEvent 是浏览器的 API 用来触发事件

describe('Input', ()=> {
	it('存在.', () => {
		expect(Input).to.exist
	})
	describe('props', ()=> {
		const Constructor = Vue.extend(Input)
		let vm
		afterEach(function() {
			vm.$destroy()
		})
		
		it('接收 value', ()=> {
			vm = new Constructor({
				propsData: {
					value: '1234'
				}
			}).$mount()
			const inputElement = vm.$el.querySelector('input')
			expect(inputElement.value).to.equal('1234')
		})
		it('接收 disabled', ()=> {
			vm = new Constructor({
				propsData: {
					disabled: true
				}
			}).$mount()
			const inputElement = vm.$el.querySelector('input')
			expect(inputElement.disabled).to.equal(true)
		})
		it('接收 readonly', ()=> {
			vm = new Constructor({
				propsData: {
					readonly: true
				}
			}).$mount()
			const inputElement = vm.$el.querySelector('input')
			expect(inputElement.readOnly).to.equal(true)
		})
		it('接收 error', ()=> {
			vm = new Constructor({
				propsData: {
					error: '你错了'
				}
			}).$mount()
			const useElement = vm.$el.querySelector('use')
			expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
			const errorMessage = vm.$el.querySelector('.error-message')
			expect(errorMessage.innerText).to.equal('你错了')
		})
	})
	
	describe('事件', ()=> {
		const Constructor = Vue.extend(Input)
		let vm
		afterEach(function() {
			vm.$destroy()
		})
		it('支持 change/input/focus/blur 事件', ()=> {
			['change', 'input', 'focus', 'blur'].map((eventName)=> {
				vm = new Constructor().$mount()
				const callback = sinon.fake()
				vm.$on(eventName, callback)
				// 触发 input 的 change 事件
				let event = new Event(eventName)
				Object.defineProperty(event, 'target', {value: {value: '双向绑定'}, enumerable: true})
				let inputElement = vm.$el.querySelector('input')
				inputElement.dispatchEvent(event)
				expect(callback).to.have.been.calledWith('双向绑定')
			})
		})
	})
	
	
})