

<template>
  <div>
  <b-navbar toggleable type="dark" variant="dark" class="nav-outer">
 
    <router-link to="/"  style="cursor:pointer; color:white; text-decoration: none;padding-left: 20px;"> Home</router-link>
    <router-link to="/about" style="cursor:pointer; color:white; text-decoration: none;padding-left: 900px;" v-if="IsloggedIn">AboutUs</router-link>
    <router-link to="/login"  style="cursor:pointer; color:white; text-decoration: none;padding-left: 900px;" v-if="!IsloggedIn">Login</router-link>
    <router-link to="/register"  style="cursor:pointer; color:white; text-decoration: none;padding-right: 20px;" v-if="!IsloggedIn">Registration</router-link>
    <a href="javascript:void(0)" v-if="IsloggedIn"  @click="Logout" style="cursor:pointer; color:white; text-decoration: none;padding-right: 20px;">Logout</a>
  </b-navbar>
  </div>
</template>
<script>
export default { 
  data() { 
            return { 
              IsloggedIn:false,
              
            }
        },
      
  mounted(){
  const IsloggedInn= localStorage.getItem('IsloggedIn');
  this.IsloggedIn= IsloggedInn && IsloggedInn == "1"
  console.log("navbar",this.IsloggedIn);
    },

 
methods :{
      Logout(){
        this.IsloggedIn=false;
        localStorage.setItem("IsloggedIn",0);
       this.$router.push({path:'/login'})
        
      }
    }
};

</script>
 
<style>

#right{
    margin-left:800px;
    color:aliceblue;
    text-decoration: none;
}
#rightt{
    margin-right:30px;
    color:aliceblue;
    text-decoration: none;
}
#left{
  padding-left: 25px;
  color:white;
  text-decoration: none;
}

#leftt{
  padding-left: 30px;
  color:white;
  text-decoration: none;
}


</style>