<template>
    <div id="lower">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>
  
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      
      <v-text-field 
    label="Password" 
    v-model="password" 
    :rules="passwordRules" 
    type="password" 
    required
></v-text-field>

<v-text-field 
    label="Confirm Password" 
    v-model="confirmPassword" 
    :rules="[confirmPasswordRules,passwordConfirmationRule]"
    type="password" 
    required
></v-text-field>
  
      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>
  
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Validate
      </v-btn>
  
      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset Form
      </v-btn>
  
     <v-btn
     color="success"
     class="mr-4"
     @click="submit">Submit</v-btn>
    </v-form>
    </div>
  </template>

  <script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

   
        password: '',
        confirmPassword: '',
        passwordRules: [v => !!v || "Password is required"],
        confirmPasswordRules: [v => !!v || "Password is required"],
      }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      Submit (){
        this.swal("Data submitted successfully");
      }
     
    },
    computed: {
    passwordConfirmationRule() {
        return () => (this.password === this.confirmPassword) || 'Password must match'
    },
}
  };
</script>
<style>
#lower{
  margin-top:50px;
  padding-bottom: 70px;
}
</style>
   