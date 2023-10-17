import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from './components/HomeComponent.vue';
import AboutUs from './components/AboutUs.vue';
import LoginComponent from './components/LoginComponent.vue';
import RegistrationComponent from './components/RegistrationComponent.vue';
Vue.use(VueRouter);

const routes=[
    {
        name:'HomeComponent',
        path:'/',
        component:HomeComponent
    },
    {
        name:'AboutUs',
        path:'/AboutUs',
        component:AboutUs
    },
    {
        name:'LoginComponent',
        path:'/LoginComponent',
        component:LoginComponent
    },
    {
        name:'RegistrationComponent',
        path:'/RegistrationComponent',
        component:RegistrationComponent
    },

];

const router=new VueRouter({
    mode: 'history',
    routes
});
export default router;