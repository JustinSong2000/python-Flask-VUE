// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import { DataTables, DataTablesServer } from 'vue-data-tables'
import VueDataTables from 'vue-data-tables'
import less from 'less'

Vue.use(VueDataTables)
Vue.use(DataTables)
Vue.use(DataTablesServer)
locale.use(lang)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(less)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
