<template>
    <div>
        我是Home
        <el-button type="info" @click="signOutHandler">登出</el-button>
    </div>
</template>
<script>
export default {
    methods:{
        signOutHandler(){
            window.sessionStorage.clear();
            this.$router.push('/login')
            this.$msg.success('退出成功!')
        }
    }
}
</script>
<style lang="less" scoped>

</style>