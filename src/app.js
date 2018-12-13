import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data: {
    	loading1: false,
	    loading2: true,
	    loading3: false
    }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)


const expect = chai.expect
// 单元测试

{
	// 把对象改为构造函数
	const Constructor = Vue.extend(Button)
	const gButton = new Constructor({
		propsData: {
			icon: 'setting'
		}
	})
	gButton.$mount()
	let useElement = gButton.$el.querySelector('use')
	let href = useElement.getAttribute('xlink:href')
	expect(href).to.eq('#i-setting')
	gButton.$el.remove()
	gButton.$destroy()
}

{
	const Constructor = Vue.extend(Button)
	const gButton = new Constructor({
		propsData: {
			icon: 'setting',
			loading: true
		}
	})
	gButton.$mount()
	let useElement = gButton.$el.querySelector('use')
	let href = useElement.getAttribute('xlink:href')
	expect(href).to.eq('#i-loading')
	gButton.$el.remove()
	gButton.$destroy()
}


{
	const div = document.createElement('div')
	document.body.appendChild(div)
	const Constructor = Vue.extend(Button)
	const gButton = new Constructor({
		propsData: {
			icon: 'setting'
		}
	})
	gButton.$mount(div)
	let svg = gButton.$el.querySelector('svg')
	let {order} = window.getComputedStyle(svg)
	expect(order).to.eq('1')
	gButton.$el.remove()
	gButton.$destroy()
}

{
	const div = document.createElement('div')
	document.body.appendChild(div)
	const Constructor = Vue.extend(Button)
	const gButton = new Constructor({
		propsData: {
			icon: 'setting',
			iconPosition: 'right'
		}
	})
	gButton.$mount(div)
	let svg = gButton.$el.querySelector('svg')
	let {order} = window.getComputedStyle(svg)
	expect(order).to.eq('2')
	gButton.$el.remove()
	gButton.$destroy()
}

{
	// mock
	const Constructor = Vue.extend(Button)
	const gButton = new Constructor({
		propsData: {
			icon: 'setting',
			iconPosition: 'right'
		}
	})
	gButton.$mount()
	let spy = chai.spy(function() {
	
	})
	gButton.$on('click', spy)
	// 希望这个函数被执行
	let button = gButton.$el
	button.click()
	expect(spy).to.have.been.called()
}