import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import wxapi from '@/common/wxapi.js'

Vue.config.productionTip = false;


(function (doc, win) {
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize' // 如果有orientationchange事件，说明是在safari上运行
  var recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = 20 * (clientWidth / 320) + 'px' // 转化成pt逻辑像素
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
