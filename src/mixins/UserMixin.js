export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
      },
      valid: true,
      rules: {
        emailRules: [
          (v) => !!v || "E-mail is required",
          (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        passwordRules: [(v) => !!v || "Password is required"],
        nameRules: [
          (v) => !!v || "Name is required",
          (v) =>
            (v && v.length <= 10) || "Name must be less than 10 characters",
        ],
      },
    };
  },
  methods: {
    reset() {
      this.$refs.myform.reset();
    },
  },
};
