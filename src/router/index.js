import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue'
import HelloWorld from '@/components/HelloWorld'

Vue.use(IonicVueRouter)
 
export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})