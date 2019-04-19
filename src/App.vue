<template>
    <div id="app">
        <!--<img src="./assets/logo.png"> 1920×1080-->
        <span>{{msg}}</span>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                msg: "App.vue 项目入口页面"
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        background: antiquewhite;
    }
</style>
