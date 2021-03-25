<template>
    <div>
      {{username}},欢迎您!  
    </div>
</template>
<script>
import decode from '../utils/'
export default {
    data(){
        return {
            username:'',
            loginTime:''
        }
    },
//    created(){
//         // alert(1)
//         if(localStorage.getItem('token')){         
//         this.$store.dispatch('setUser',decode)
//         // localStorage.setItem('username',decode.username)    
     
//     }  
           
       
    // },


    mounted: function(){
        this.username= this.$store.state.user.username;
     },

    // methods: {
    //    getUserName(){
    //     //    window.localStorage.setItem('username',decode.username)
    //         this.reload();
    //         //this.username=this.$store.state.user.username;
            
    //     }
    // }
}
</script>