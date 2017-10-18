// webpack 把所有资源，不限类型都视作模块，所以会出现引用 CSS之类的这种操作

import Layer from './components/layer/layer.js'

const App = function () {
	let dom = document.getElementById('app')
	let layer = new Layer()

	dom.innerHTML = layer.tpl
}

new App()