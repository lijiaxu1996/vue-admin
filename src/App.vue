<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'

export default {
  name: 'app',
  created(){    
    if(localStorage.getItem('token')){      
        const decode = jwtDecode(localStorage.getItem('token'))      
        this.$store.dispatch('setUser',decode)    
    }  
    // location.reload() 
}
}
</script>

<style lang="less">
  html,body,#app{
    margin: 0;
    padding: 0;
    height: 100%;
  }
</style>
