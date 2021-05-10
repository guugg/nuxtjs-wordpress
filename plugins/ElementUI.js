// plugins/element-ui.js

import Vue from 'vue';

// 全局引用
// import Element from 'element-ui'

// 按需引用
import {
  Button,
  Container,
  Row,
  Menu,
  Submenu,
  MenuItem,
  header,
  footer,
  main
} from 'element-ui'



// 按需使用
Vue.use(Button);
Vue.use(Container);
Vue.use(Row);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(header);
Vue.use(footer);
Vue.use(main);

