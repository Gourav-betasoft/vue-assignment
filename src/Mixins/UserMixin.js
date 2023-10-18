export default {
    
    data () {
      return{
      formData:{
        email:"",
        password:"",
       
      },
      valid: true,
      rules:{
    
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
        passwordRules: [
          v => !!v || "Password is required"
        ],

    
  }
}
  },
  methods: {
   
    reset (){
      this.$refs.myform.reset()
    },
   }
}