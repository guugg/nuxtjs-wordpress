// plugins/element-ui.js

import Vue from 'vue'
import locale from 'element-ui/lib/locale/lang/en'

// 全局引用
// import Element from 'element-ui'

// 按需引用
import { Button, Input } from 'element-ui'


// Vue.use(Element, { locale })

// 按需使用
Vue.use(Button, { locale })
Vue.use(Input, { locale })