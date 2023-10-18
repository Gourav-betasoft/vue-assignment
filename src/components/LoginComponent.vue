<template>
  <div id="lower">
    <v-form ref="myform" width="250px" class="pa-md-4 mx-lg-auto" @submit.prevent="onSubmit">
      <v-text-field v-model="formData.email" :rules="rules.emailRules" label="E-mail" type="email"
        required></v-text-field>


      <v-text-field label="Password" v-model="formData.password" :rules="rules.passwordRules" type="password"
        required></v-text-field>



      <v-btn color="success" class="mr-4" type="submit">
        Submit
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset">
        Reset Form
      </v-btn>


    </v-form>
  </div>
</template>
<script>

import UserMixin from '../Mixins/UserMixin';
//import Swal from 'vue-sweetalert2';
export default {
  name: "AppLogin",
  mixins: [UserMixin],
  methods: {

    onSubmit() {
      const temp = this.$refs.myform.validate()
      if (temp){
        localStorage.setItem("IsloggedIn", 1);
        location.reload();
        this.$router.push({path: "/about"})
        
      }
      
      }
      // else{
      //     console.log('valid',this.formData);

      // } 

    }

  };

</script>
<style>
#lower {
  margin-top: 50px;
  padding-bottom: 70px;
}
.v-application .pa-md-4 {
  padding:10px !important;
  width:516px;
  margin:auto;

}
</style> 