<template>
  <div id="lower">
    <v-form
      ref="myform"
      width="250px"
      class="pa-md-4 mx-lg-auto"
      @submit.prevent="onSubmit"
    >
      <v-text-field
        label="E-mail"
        type="email"
        v-model="formData.email"
        :rules="rules.emailRules"
        required
        autocomplete="off"
      ></v-text-field>
      <v-text-field
        label="Password"
        type="password"
        v-model="formData.password"
        :rules="rules.passwordRules"
        required
      ></v-text-field>
      <v-btn color="success" class="mr-4" type="submit"> Submit </v-btn>
      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
    </v-form>
  </div>
</template>
  <script>
import UserMixin from "../mixins/UserMixin";
import Swal from 'sweetalert2'
//import Swal from 'vue-sweetalert2';
export default {
  name: "LoginPage",
  mixins: [UserMixin],
  methods: {
    onSubmit() {
      if (this.$refs.myform.validate()) {
        const data = {
          email: this.formData.email,
          password: this.formData.password,
        };
        console.log(data);
        Swal.fire("Login Successfully!!");

        localStorage.setItem("IsloggedIn", 1);
        this.$router.push({ path: "/about" });
      } else {
        console.log("valid", this.formData);
      }
    },
  },
};
</script>
  <style>
#lower {
  margin-top: 50px;
  padding-bottom: 70px;
}
.v-application .pa-md-4 {
  padding: 10px !important;
  width: 516px;
  margin: auto;
}
</style>

