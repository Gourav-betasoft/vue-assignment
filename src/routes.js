import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from './components/HomeComponent.vue';
import AboutUs from './components/AboutUs.vue';
import LoginComponent from './components/LoginComponent.vue';
import RegistrationComponent from './components/RegistrationComponent.vue';
// import auth from './middleWare/auth';
// import guest from './middleWare/guest';
Vue.use(VueRouter);

const routes=[
    {
        name:'Home',
        path:'/',
        component:HomeComponent,
        
    },
    {
        name:'AboutUs',
        path:'/about',
        component:AboutUs,
        meta: {
            requiresAuth: true
        }
        
    },
    {
        name:'Login',
        path:'/login',
        component:LoginComponent,
        meta: {
            //middleWare: [guest ]
            guest:true
        }
        
    },
    {
        name:'Register',
        path:'/register',
        component:RegistrationComponent,
        meta: {
            //middleWare: [guest ]
            guest:true
        }
    },

];

const router=new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    const isloggedIn =parseInt(localStorage.getItem('IsloggedIn') ?? "0");
    console.log("isLogged ",isloggedIn)
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
     
      if (!isloggedIn) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (isloggedIn) {
            next({
              path: '/'
            })
          } else {
            next()
          }
        
    }else {
        //
      next() // make sure to always call next()!
    }
  })
export default router;