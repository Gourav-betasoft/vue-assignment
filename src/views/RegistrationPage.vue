<template>
  <div id="lower">
    <v-form
      ref="myform"
      @submit.prevent="onSubmit"
      class="pa-md-4 mx-lg-auto"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="formData.name"
        :counter="10"
        :rules="rules.nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="formData.email"
        :rules="rules.emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        label="Password"
        v-model="formData.password"
        :rules="rules.passwordRules"
        type="password"
        required
      ></v-text-field>

      <v-text-field
        label="Confirm Password"
        v-model="formData.confirmPassword"
        :rules="rules.confirmPasswordRules"
        type="password"
        required
      ></v-text-field>

      <v-btn color="success" class="mr-4" type="submit">Submit</v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
    </v-form>
  </div>
</template>
  
    <script>
import UserMixin from "@/mixins/UserMixin";

export default {
  mixins: [UserMixin],
  data() {
    return {
      formData: {
        name: "",
        confirmPassword: "",
      },
      valid: true,
      rules: {
        nameRules: [
          (v) => !!v || "Name is required",
          (v) =>
            (v && v.length <= 10) || "Name must be less than 10 characters",
        ],

        confirmPasswordRules: [
          (v) => !!v || "Password is required",
          (v) => this.formData.password === v || "Password must match",
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.$refs.myform.validate()) {
        const data = {
          name: this.formData.name,
          email: this.formData.email,
          password: this.formData.password,
          confirmPassword: this.formData.confirmPassword,
        };

        console.log(data);

        alert("success", data.message, "success");
        this.$router.push({ path: "/login" });
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