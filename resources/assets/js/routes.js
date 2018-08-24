/*
|-------------------------------------------------------------------------------
| routes.js
|-------------------------------------------------------------------------------
| Contains all of the routes for the application
*/

/**
 *  首先，需要导入 Vue 和 Vue Router 并告知 Vue 我们使用 Vue Router 来处理应用路由
 */

/**
 * Imports Vue and VueRouter to extend with the routes.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 * Extends Vue to use Vue Router
 */
Vue.use( VueRouter )

export default new VueRouter({
    route:[
        {
            path: '/',
            name: 'home',
            component: Vue.component( 'Home', require( './pages/Home.vue' ) )
        },
        {
            path: '/cafes',
            name: 'cafes',
            component: Vue.component( 'Cafes', require( './pages/Cafes.vue' ) )
        },
        {
            path: '/cafes/new',
            name: 'newcafe',
            component: Vue.component( 'NewCafe', require( './pages/NewCafe.vue' ) )
        },
        {
            path: '/cafes/:id',
            name: 'cafe',
            component: Vue.component( 'Cafe', require( './pages/Cafe.vue' ) )
        }
    ]
})