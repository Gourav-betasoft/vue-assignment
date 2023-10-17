

<template>
  <div>
  <b-navbar toggleable type="dark" variant="dark">
 
    <router-link to="/" id="left" > Home</router-link>
    <router-link to="/AboutUs" id="leftt">AboutUs</router-link>
    <router-link to="/LoginComponent" id="right">Login</router-link>
    <router-link to="/RegistrationComponent" id="rightt">Registration</router-link>
  </b-navbar>
  </div>
</template>
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