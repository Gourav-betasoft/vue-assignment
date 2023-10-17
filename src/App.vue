<template>
  <v-app>
      <NavbarComponent />
    <v-main>
     <router-view></router-view>
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import router from './routes';



export default {
    name: 'App',
    router,
    data: () => ({
    //
    }),
    components: { NavbarComponent, FooterComponent }
}
</script>
