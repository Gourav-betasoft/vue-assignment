<template>
  <v-app>
    <div>
      <v-app-bar color="deep-purple accent-4" dense dark>
        <v-toolbar-title
          ><router-link to="/" style="text-decoration: none; color: white"
            >HOME</router-link
          ></v-toolbar-title
        >
        <v-toolbar-title v-if="IsloggedIn" style="margin-left: 30px"
          ><router-link to="/about" style="text-decoration: none; color: white"
            >ABOUTUS</router-link
          ></v-toolbar-title
        >
        <v-toolbar-title v-if="IsloggedIn" style="margin-left: 30px"
          ><router-link to="/shop" style="text-decoration: none; color: white"
            >SHOP</router-link
          ></v-toolbar-title
        >
        <v-spacer></v-spacer>

        <v-btn v-if="!IsloggedIn" style="margin-right: 30px" >
          <router-link to="/login" style="text-decoration: none; color: white"
            >LOGIN</router-link
          >
        </v-btn>

        <v-btn v-if="!IsloggedIn">
          <router-link
            to="/register"
            style="text-decoration: none; color: white"
            @click="registration"
            >REGISTRATION</router-link
          >
        </v-btn>
        <v-btn v-if="IsloggedIn" @click="Logout"> LOGOUT </v-btn>
      </v-app-bar>
    </div>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    IsloggedIn: false,
  }),

  mounted() {
    const IsloggedInn = localStorage.getItem("IsloggedIn");
    this.IsloggedIn = IsloggedInn && IsloggedInn == "1";
    console.log("navbar", this.IsloggedIn);
  },

  methods: {
    login() {
   
      this.$router.push({ path: "/" });
      location.reload();
    },
    Logout() {
      this.IsloggedIn = false;
      localStorage.setItem("IsloggedIn", 0);
      this.$router.push({ path: "/register" });
    },
    registration() {
      this.$router.push({ path: "/register" });
    },
  },
};
</script>
